const express = require('express');
const router = express.Router(); 

const specialOfferController = require('../app/controllers/SpecialOfferController');

//newsController.index;

router.get('/special_offer' , specialOfferController.show);

router.get('/', specialOfferController.index);

module.exports = router;