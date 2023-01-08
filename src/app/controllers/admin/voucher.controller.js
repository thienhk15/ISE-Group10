const express = require('express');
const router = express.Router();
const voucherService = require('../../../services/voucher.service');
const _ = require('lodash');

router.get('/', async (req, res) => {
    try {
        if (req.cookies.admin != null) {
            const { success } = req.query;
            const vouchers = await voucherService.getAll();
            const message = _.isEmpty(success) ? null : {
                content: success === 'true' ? 'Voucher deleted' : 'Deleted failed',
                alert: success === 'true' ? 'success' : 'danger'
              }
            res.render('admin/table_vouchers', { layout: 'admin-main', vouchers, admin: req.cookies.admin , message});
        }
        else {
            res.redirect('/admin/login');
        }

    } catch (error) {
        console.log(error);
    }
})

router.post('/create', async (req, res) => {
    const data = req.body;
    try {
        const result = await voucherService.addVoucher(data.code, data.discount);
        return res.redirect('/admin/table_vouchers?success=true');
    } catch (error) {
        console.log(error);
        return res.render('admin/error500', { layout: 'admin-main' });
    }
})
router.post('/delete', async (req, res) => {
    const data = req.body;
    try {
        const result = await voucherService.deleteVoucher(data.code);
        return res.redirect('/admin/table_vouchers?success=true');
    } catch (error) {
        console.log(error);
        return res.render('admin/error500', { layout: 'admin-main' });
    }
})

module.exports = router;