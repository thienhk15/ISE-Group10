const express = require('express');
const router = express.Router(); 

const normalController = require('../app/controllers/NormalController');

//newsController.index;

router.get('/normal' , normalController.show);

router.get('/', normalController.index);

module.exports = router;