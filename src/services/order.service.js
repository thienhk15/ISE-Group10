const Order = require('../models/order.model');

const orderService = {
    createNewOrder:(newAddress, subTotal, userPhone, userId)=>{
        return new Promise(async (resolve, reject)=>{
            try{
                const d = new Date();
                const order = Order.create({
                    createtAt: d,
                    address: newAddress,
                    phone: userPhone,
                    totalPrice: subTotal,
                    note: null,
                    createdBy: userId
                })
                resolve(order);
            }
            catch (err){
                return reject(err);
            }
        })
    }
}

module.exports = orderService;