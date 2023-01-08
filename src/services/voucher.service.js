const Voucher = require('../models/voucher.model');

const voucherService = {
    getVoucher: (entryCode) => {
        return new Promise(async (resolve, reject) => {
            try {
                const voucher = await Voucher.findOne({
                    where: {
                        code: entryCode
                    },
                    raw: true
                });
                return resolve(voucher);
            } catch (error) {
                return reject(error);
            }
        })
    },
    getAll:() =>{
        return new Promise(async (resolve, reject) => {
            try {
                const voucher = await Voucher.findAll({
                    raw: true
                });
                return resolve(voucher);
            } catch (error) {
                return reject(error);
            }
        })
    },
    addVoucher:(newCode, newDiscount)=>{
        return new Promise(async (resolve, reject) => {
            try {
                const voucher = await Voucher.create({
                    code: newCode,
                    discount: newDiscount
                });
                return resolve(voucher);
            } catch (error) {
                return reject(error);
            }
        })
    },
    deleteVoucher: (delCode)=>{
        return new Promise(async (resolve, reject) => {
            try {
                const voucher = await Voucher.destroy({
                    where: {
                        code: delCode
                    },
                    raw: true
                });
                return resolve(voucher);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

module.exports = voucherService;