const User = require('../models/user.model');
const db = require('../config/database');

const userService = {
    getAllUsers: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const users = await User.findAll({raw: true});
                return resolve(users);
            } catch (error) {
                return reject(error);
            }
        })
    },

    getUserById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne({
                    where: {
                        id: id
                    },
                    raw: true
                });
                return resolve(user);
            } catch (error) {
                return reject(error);
            }
        })
    },

    updateUserById: (id, data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await User.update(data, {
                    where: {
                        id: id
                    }
                });
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    },
    findUser: (user, pass) => {
        return new Promise(async (resolve, reject) => {
            try {
                const users = await User.findOne({ where: { email: user, password: pass } });
                return resolve(users);
            } catch (error) {
                return reject(error);
            }
        })
    },
    checkIfExists: (email) =>{
        return new Promise(async (resolve, reject) => {
            try{
                const user = await User.findOne({
                    where:{
                        email:{
                            $eq:email
                        }
                    },
                    raw:true
                });
                return resolve(user);
            } catch(error){
                return reject(error)
            }
        })
    },
    createNewUser: (hashID, newName, newEmail, newPass, newDob, newPhone) => {
        return new Promise(async (resolve, reject) => {
            try{
                const d = new Date();
                const user = await User.create({
                    id: hashID, 
                    name: newName, 
                    isConfirmed: false, 
                    dob: newDob, 
                    phone: newPhone, 
                    isAdmin: false,
                    password: newPass,
                    email: newEmail,
                    avatarUrl: "https://seud.org/wp-content/uploads/2020/06/avatar-nobody.png",
                    createAt: d,
                    updateAt: null
                });
                return resolve(user);
            } catch(error){
                return reject(error)
            }
        })
    }
}

module.exports = userService;