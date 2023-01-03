const express = require("express");

const router = express.Router();
const orderService = require('../../services/order.service');

router.get('/', async (req, res, next) => {
    try {
        let user = req.cookies["user"];
        if (user == undefined) res.render('admin/error500', { layout: 'customer-main' })
        else {
            var orderList = []
            const pendingOrder = await orderService.getPendingOrder(user.id);
            for (var i = 0; i < pendingOrder.length; i++) {
                const obj = pendingOrder[i];
                obj["progress"] = 0;
                orderList.push(obj);
            }
            const shippingOrder = await orderService.getShippingOrder(user.id);
            for (var i = 0; i < shippingOrder.length; i++) {
                const obj = shippingOrder[i];
                obj["progress"] = 50;
                orderList.push(obj);
            }
            const doneOrder = await orderService.getDoneOrder(user.id);
            for (var i = 0; i < doneOrder.length; i++) {
                const obj = doneOrder[i];
                obj["progress"] = 100;
                orderList.push(obj);
            }

            res.render('customer/orderstatus', { orderList, user });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;