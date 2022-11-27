const express = require('express');
const router = express.Router(); 

const forgetPassController = require('../app/controllers/ForgetpassController');

//newsController.index;

router.get('/forgetpass' , forgetPassController.show);

router.get('/', forgetPassController.index);

module.exports = router;