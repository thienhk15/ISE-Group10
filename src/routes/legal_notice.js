const express = require('express');
const router = express.Router(); 

const legalNoticePassController = require('../app/controllers/LegalNoticeController');

//newsController.index;

router.get('/legal_notice' , legalNoticePassController.show);

router.get('/', legalNoticePassController.index);

module.exports = router;