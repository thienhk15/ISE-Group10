const express = require("express");

const router = express.Router();
const config = require('../../config');
const bookService = require('../../services/book.service');
const categoryService = require("../../services/category.service");

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    const categories = await categoryService.getAllCategories();
    const relatedbook = await bookService.getBooksByCategoryId(book.categoryId);
    let user = req.cookies["user"];
    res.render('customer/product_details', {user,book, relatedbook, categories, layout: 'customer-main' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;