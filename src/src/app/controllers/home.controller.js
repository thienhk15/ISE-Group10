const express = require("express");

const router = express.Router();
const config = require('../../config');
const bookService = require('../../services/book.service');
const categoryService = require('../../services/category.service');
var Paginator = require("paginator");
const limit = 6;


router.get('/', async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
        //const books = await bookService.getAllBooks();

        const pageAsNum = req.query.page? Number(req.query.page) : 1;


        let page = 1
        if(!Number.isNaN(pageAsNum)&&pageAsNum>0){
            page = pageAsNum;
        }

        var paginator = new Paginator(limit, 2);
        const totalBooks = await bookService.getAllBooks();
        const countBooks = totalBooks.length;

        var pagination_info = paginator.build(countBooks, page);

        const books = await bookService.getBooksLimit(limit*(page-1), limit);

        const searchUrl='/customer/products/search';

        let user = req.cookies["user"];
        res.render('customer/home', { 
            books: books, 
            categories: categories, 
            searchUrl: searchUrl, 
            layout: 'customer-main', 
            user, 
            pagination_info,});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;