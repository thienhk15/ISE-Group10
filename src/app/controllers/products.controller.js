const express = require("express");

const router = express.Router();
const bookService = require('../../services/book.service');
const qs = require('qs');
const categoryService = require("../../services/category.service");
var Paginator = require("paginator");
const limit = 6;

router.get('/', async (req, res, next) => {
    try {
        const { sort: sortFilter } = req.query;
        const pageAsNum = req.query.page ? Number(req.query.page[1]) : 1;

        let pageNo = 1
        if (!Number.isNaN(pageAsNum) && pageAsNum > 0) {
            pageNo = pageAsNum;
        }

        let products = [];
        let pagination_info;
        if (sortFilter === '') {
            const totalBooks = await bookService.searchBook(req.query);
            const countBooks = totalBooks.length;
            const paginator = new Paginator(limit, 6);
            pagination_info = paginator.build(countBooks, pageNo);
            products = await bookService.searchBookByLimit(req.query, limit * (pageNo - 1), limit);
        }
        else {
            const totalBooks = await bookService.searchBookAndSorted(req.query);
            const countBooks = totalBooks.length;
            const paginator = new Paginator(limit, 6);
            pagination_info = paginator.build(countBooks, pageNo);
            products = await bookService.searchBookAndSortedByLimit(req.query, limit * (pageNo - 1), limit);
        }
        const categories = await categoryService.getAllCategories();
        if (pagination_info.total_pages < 2) {
            pagination_info = null;
        }
        console.log("asdasdasd asdasdasd ");
        console.log(req.query.page[1]);
        //console.log(products);
        //console.log(products);
        let user = req.cookies["user"];
        res.render('customer/products', { user, pagination_info, products, categories });
    } catch (error) {
        console.log(error);
        res.render('admin/error401')
    }
});

router.get('/category/:id', async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const books = await bookService.getBooksByCategoryId(categoryId);
        const categories = await categoryService.getAllCategories();
        res.render('customer/products', { products: books, categories, searchUrl: 'customer/products/search', originalUrl: req.baseUrl, layout: 'customer-main' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const query = JSON.parse(JSON.stringify(req.query));
        const result = await bookService.searchBook(query);
        res.render('customer/products', { products: result, searchUrl: 'customer/products/search' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;