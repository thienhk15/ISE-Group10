const express = require('express');
const orderService = require('../../../services/order.service')
const router = express.Router();

router.get('/:id', async (req, res) => {
  id = req.params.id;
  res.render('customer/feedback' , {id})
})
router.post('/', async (req, res) => {
  id = req.body.id;
  message = req.body.message;
  console.log(message)
  if(id && message){
      let a = await orderService.updateNote(id, message)
  }
  res.redirect('/')
})

module.exports = router;