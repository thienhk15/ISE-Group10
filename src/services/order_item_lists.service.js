const OrderItemList = require('../models/order_item_lists.model');

const db = require('../config/database');

const orderItemListService = {
    createNewOne: (id, quan, bookid) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = OrderItemList.create({
                    orderId: id,
                    quantity: quan,
                    bookId: bookid
                })
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = OrderItemList.findAll({
                    where: {
                        orderId: {
                            $eq: id
                        }
                    },
                    raw: true
                })
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getTop4: ()=>{
        return new Promise(async (resolve, reject) => {
            try {
                const order = await db.query("SELECT title book_id, SUM(quantity) FROM order_item_lists join books on order_item_lists.book_id = books.id GROUP BY book_id, title order by SUM(quantity) desc limit 5", {raw: true});
                
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    }
}

module.exports = orderItemListService;