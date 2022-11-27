const express = require('express');
const router = express.Router(); 

const productDetailsController = require('../app/controllers/ProductDetailsController');

//newsController.index;

router.get('/product_details' , productDetailsController.show);

router.get('/', productDetailsController.index);

module.exports = router;