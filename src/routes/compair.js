const express = require('express');
const router = express.Router(); 

const conpareController = require('../app/controllers/CompairController');

//newsController.index;

router.get('/compair' , conpareController.show);

router.get('/', conpareController.index);

module.exports = router;