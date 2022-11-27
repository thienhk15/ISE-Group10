const express = require('express');
const router = express.Router(); 

const componentsController = require('../app/controllers/ComponentsController');

//newsController.index;

router.get('/components' , componentsController.show);

router.get('/', componentsController.index);

module.exports = router;