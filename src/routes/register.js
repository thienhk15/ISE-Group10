const express = require('express');
const router = express.Router(); 

const registerController = require('../app/controllers/RegisterController');

//newsController.index;

router.get('/register' , registerController.show);

router.get('/', registerController.index);

module.exports = router;