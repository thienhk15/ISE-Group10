const express = require('express');
const router = express.Router(); 

const productSummaryController = require('../app/controllers/ProductSummaryController');

//newsController.index;

router.get('/product_summary' , productSummaryController.show);

router.get('/', productSummaryController.index);

module.exports = router;