const express = require('express')

const router = express.Router();

const customerController = require('../app/controllers/customerController');
const homeController = require('../app/controllers/home.controller');
const productsController = require('../app/controllers/products.controller');
const productDetailController = require('../app/controllers/product_detail.controller');
const userController = require('../app/controllers/user.controller');
const loginController = require('../app/controllers/login.controller')
const registerController = require('../app/controllers/register.controller');

router.use('/compair', customerController.compair);
router.use('/components', customerController.components);
router.use('/contact', customerController.contact);
router.use('/faq', customerController.faq);
router.use('/forgetpass', customerController.forgetpass);
router.use('/home', homeController);
router.use('/legal_notice', customerController.legal_notice);
router.get('/login', customerController.login);
router.post('/login/find', loginController.checkLogin);
router.get('/logout', customerController.logout);
router.use('/register', registerController);
router.use('/normal', customerController.normal);
router.use('/product_details', productDetailController);
router.use('/product_summary', customerController.product_summary);
router.use('/special_offer', customerController.special_offer);
router.use('/tac', customerController.tac);
router.use('/products', productsController);
router.use('/user', userController);

module.exports = router;
