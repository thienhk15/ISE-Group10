const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Voucher = db.define('Voucher',
    {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        discount:{
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: 'voucher',
        timestamps: false,
    }
);

Voucher.sync()
    .then(() => console.log('Voucher sync successfully'))
    .catch(error => console.log(error));

module.exports = Voucher;