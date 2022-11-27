const express = require('express');
const router = express.Router(); 

const productsController = require('../app/controllers/ProductsController');

//newsController.index;

router.get('/products' , productsController.show);

router.get('/', productsController.index);

module.exports = router;