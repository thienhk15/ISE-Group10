const express = require("express");
const router = express.Router();
const cartService = require('../../services/cart.service');
const bookService = require('../../services/book.service');


router.get('/', async (req, res, next) => {
  try {
    let user = req.cookies["user"];
    if (user == undefined) res.render('admin/error500', { layout: 'customer-main' })
    else {
      const yourCart = await cartService.getCart(user.id);
      listProductsJson = JSON.parse(yourCart.products);

      let products = [];

      var subTotal = 0;

      for(let i =0; i<listProductsJson.length; i++){
        let obj = listProductsJson[i];
        let product = await bookService.getBookById(obj.book_id);
        console.log(product);
        products.push(product);
        products[i].quantity = obj.quantity;
        products[i].total = parseInt(obj.quantity) * Math.trunc(parseInt(products[i].price));
        subTotal += products[i].total;
      }
      res.render('customer/cart', { user, layout: 'customer-main', products, subTotal });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

router.post('/add-to-cart', async (req, res) => {
  try {
    let message = "";
    let user = req.cookies["user"];
    const params = { book_id: req.body.id, quantity: "1" };
    const book_id_check = params.book_id;
    const checkExistCart = await cartService.getCart(user.id);
    if (checkExistCart == null) {
      const addedCart = await cartService.createNewCart(user.id, "[" + JSON.stringify(params) + "]");
      message = "Successful";
    }
    else {
      // check wheather book is existing in your cart or not
      var check = true;
      const listBook = JSON.parse(checkExistCart.products)
      for (var i = 0; i < listBook.length; i++) {
        if (parseInt(listBook[i].book_id) == book_id_check) {
          check = false;
          message = "Already in your cart";
        }
      }
      if (check == true) {
        const productsJson = JSON.parse(checkExistCart.products);
        productsJson.push(params);
        const updatedCart = await cartService.updateCart(user.id, JSON.stringify(productsJson))
        message = "Successful"
      }
    }
    res.json({ msg: message })
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

router.post('/remove-from-cart', async (req, res) => {
  try {
    let user = req.cookies["user"];
    const book_id = req.body.id;
    const cart = await cartService.getCart(user.id);
    const productsJson = JSON.parse(cart.products);
    var productsJsonRemove = []
    for (var i = 0; i < productsJson.length; i++) {
      var obj = productsJson[i];
      if (obj.book_id == book_id)
        continue;
      productsJsonRemove.push(obj);
    }
    const updatedCart = await cartService.updateCart(user.id, JSON.stringify(productsJsonRemove))
    message = "Successful"
    res.json({ msg: message })
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

router.post('/increase-quantity', async (req, res) => {
  try {
    let user = req.cookies["user"];
    console.log(user);
    const book_id = req.body.id;
    const cart = await cartService.getCart(user.id);
    const productsJson = JSON.parse(cart.products);
    var newProductsJson = [];
    for (var i = 0; i < productsJson.length; i++) {
      var obj = productsJson[i];
      if (obj.book_id == book_id) {
        obj.quantity = parseInt(obj.quantity) + 1;
      }
      newProductsJson.push(obj);
    }
    const updatedCart = await cartService.updateCart(user.id, JSON.stringify(newProductsJson))
    console.log(updatedCart)
    message = "Successful"
    res.json({ msg: message })
  }
  catch (error) {
    console.log(error);
  }
})

router.post('/decrease-quantity', async (req, res) => {
  try {
    let user = req.cookies["user"];
    const book_id = req.body.id;
    const cart = await cartService.getCart(user.id);
    const productsJson = JSON.parse(cart.products);
    var newProductsJson = [];
    for (var i = 0; i < productsJson.length; i++) {
      var obj = productsJson[i];
      if (obj.book_id == book_id) {
        if (parseInt(obj.quantity) > 1) {
          obj.quantity = parseInt(obj.quantity) - 1;
        }
      }
      newProductsJson.push(obj);
    }
    const updatedCart = await cartService.updateCart(user.id, JSON.stringify(newProductsJson))
    message = "Successful"
    res.json({ msg: message })
  }
  catch (error) {
    console.log(error);
  }
})

module.exports = router;