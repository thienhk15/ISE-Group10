const express = require("express");

const router = express.Router();
const bookService = require('../../services/book.service');
const categoryService = require("../../services/category.service");
const authorService = require('../../services/author.service');
const publisherService = require('../../services/publisher.service');
const Language = require('../../models/enums/language.enum');

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    const author = await authorService.getAuthorById(book.authorId);
    const publisher = await publisherService.getPublisherById(book.publisherId);
    Object.assign(book, { author: author.name, publisher: publisher.name, language: Language[book.language] });
    const categories = await categoryService.getAllCategories();
    const relatedBooks = await bookService.getBooksByCategoryId(book.categoryId);
    let user = req.cookies["user"];
    res.render('customer/product_details', {user,book, relatedBooks, categories, layout: 'customer-main' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;