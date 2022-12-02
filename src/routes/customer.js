const express = require('express')

const router = express.Router();

const adminController = require('../app/controllers/customerController');


router.use('/compair', adminController.compair);
router.use('/components', adminController.components);
router.use('/contact', adminController.contact);
router.use('/faq', adminController.faq);
router.use('/forgetpass', adminController.forgetpass);
router.use('/home', adminController.home);
router.use('/legal_notice', adminController.legal_notice);
router.use('/login', adminController.login);
router.use('/register', adminController.register);
router.use('/normal', adminController.normal);
router.use('/product_details', adminController.product_details);
router.use('/product_summary', adminController.product_summary);
router.use('/special_offer', adminController.special_offer);
router.use('/tac', adminController.tac);

module.exports = router;
