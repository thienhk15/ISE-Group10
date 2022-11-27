const express = require('express');
const router = express.Router(); 

const faqController = require('../app/controllers/FaqController');

//newsController.index;

router.get('/faq' , faqController.show);

router.get('/', faqController.index);

module.exports = router;