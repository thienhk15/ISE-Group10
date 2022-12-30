const express = require("express");
const router = express.Router();
const cartService = require('../../services/cart.service');
const bookService = require('../../services/book.service');


router.get('/', async (req, res, next) => {
  try {
    let user = req.cookies["user"];

    const yourCart = await cartService.getCart(user.id);
    listProductsJson = JSON.parse(yourCart.products);

    //console.log(listProductsJson);

    let products = [];

    var subTotal = 0;

    for (var i = 0; i < listProductsJson.length; i++){
      var obj = listProductsJson[i];
      for (var key in obj){
        if(key === "book_id"){
            product = await bookService.getBookById(obj[key]);
            products.push(product);
        }
        else{

            products[i].quantity = obj[key];
            products[i].total = parseInt(products[i].quantity)*parseInt(products[i].price);
            subTotal+=products[i].total;
        }
      }
    }

    console.log(products);

    res.render('customer/cart', { user, layout: 'customer-main', products , subTotal});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

router.post('/add-to-cart', async (req, res) => {
  try {
      let message = "";
      let user = req.cookies["user"];
      //console.log(user.id)
      const params = { book_id: req.body.id, quantity: "1" };
      const book_id_check = params.book_id;
      //console.log(JSON.stringify(params));
      const checkExistCart = await cartService.getCart(user.id);
      console.log(checkExistCart);
      //console.log(checkExistCart);
      if (checkExistCart == null) {
          const addedCart = await cartService.createNewCart(user.id, "["+JSON.stringify(params)+"]");
          message = "Successful";
      }
      else {
          // check wheather book is existing in your cart or not
          var check = true;
          const listBook = JSON.parse(checkExistCart.products)
          // console.log(listBook);
          // console.log(book_id_check);
          for (var i = 0; i < listBook.length; i++) {
              if (parseInt(listBook[i].book_id) == book_id_check) {
                  check = false;
                  message = "Already in your cart";
              }
          }
          if (check == true) {
              const productsJson = JSON.parse(checkExistCart.products);
              productsJson.push(params);
              //console.log(productsJson);
              const updatedCart = await cartService.updateCart(user.id, JSON.stringify(productsJson))
              message = "Successful"
          }
      }
      res.json({msg: message})
  }
  catch (error) {
      console.log(error);
      res.status(500).send(error);
  }
})

router.post('/remove-from-cart', async(req, res)=>{
  try{
    let user = req.cookies["user"];
    const book_id = req.body.id;
    const cart = await cartService.getCart(user.id);
    const productsJson = JSON.parse(cart.products);
    var productsJsonRemove = []
    for(var i =0; i<productsJson.length; i++){
      var obj = productsJson[i];
      if(obj.book_id == book_id)
        continue;
      productsJsonRemove.push(obj);
    }
    console.log(productsJsonRemove);
    const updatedCart = await cartService.updateCart(user.id, JSON.stringify(productsJsonRemove))
    message = "Successful"
    res.json({msg: message})
  }
  catch(error){
    console.log(error);
    res.status(500).send(error);
  }
})

router.post('/increase-quantity', async(req, res) =>{
  try{
    let user = req.cookies["user"];
    console.log(user);
    const book_id = req.body.id;
    const cart = await cartService.getCart(user.id);
    const productsJson = JSON.parse(cart.products);
    var newProductsJson = [];
    for(var i =0; i<productsJson.length; i++){
      var obj = productsJson[i];
      if(obj.book_id == book_id){
        obj.quantity = parseInt(obj.quantity) + 1;
      }
      newProductsJson.push(obj);
    }
    const updatedCart = await cartService.updateCart(user.id, JSON.stringify(newProductsJson))
    console.log(updatedCart)
    message = "Successful"
    res.json({msg: message})
  }
  catch(error){
    console.log(error);
  }
})

router.post('/decrease-quantity', async(req, res) =>{
  try{
    let user = req.cookies["user"];
    console.log(user);
    const book_id = req.body.id;
    const cart = await cartService.getCart(user.id);
    const productsJson = JSON.parse(cart.products);
    var newProductsJson = [];
    for(var i =0; i<productsJson.length; i++){
      var obj = productsJson[i];
      if(obj.book_id == book_id ){
        if(parseInt(obj.quantity)>1){
          obj.quantity = parseInt(obj.quantity) - 1;}
      }
      newProductsJson.push(obj);
    }
    const updatedCart = await cartService.updateCart(user.id, JSON.stringify(newProductsJson))
    console.log(updatedCart)
    message = "Successful"
    res.json({msg: message})
  }
  catch(error){
    console.log(error);
  }
})

module.exports = router;