const { DataTypes } = require('sequelize');
const db = require('../config/database');

const OrderList = db.define('OrderList', 
    {
        orderId:{
            field: 'order_id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.INTEGER(1)
        },
        bookId:{
            field: 'book_id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        tableName: 'order_item_lists',
        timestamps: false
    }

);

OrderList.sync().then(()=> console.log('Order List sync successfully').catch(error => console.log(error)));

module.exports = OrderList;