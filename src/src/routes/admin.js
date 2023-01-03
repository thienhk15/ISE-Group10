const express = require('express')

const router = express.Router();

const adminController = require('../app/controllers/adminController');


router.use('/chart', adminController.chart);
router.use('/error401', adminController.error401);
router.use('/error404', adminController.error404);
router.use('/error500', adminController.error500);
router.use('/forgetpass', adminController.forgetpass);
router.use('/home', adminController.home);
router.use('/light', adminController.light);
router.use('/login', adminController.login);
router.use('/register', adminController.register);
router.use('/static', adminController.static);
router.use('/table', adminController.table);

module.exports = router;

