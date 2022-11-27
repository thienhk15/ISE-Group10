const express = require('express');
const router = express.Router(); 

const tacOfferController = require('../app/controllers/TacController');

//newsController.index;

router.get('/tac' , tacOfferController.show);

router.get('/', tacOfferController.index);

module.exports = router;