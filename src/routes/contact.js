const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/ContactController');

//newsController.index;

router.get('/contact' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
