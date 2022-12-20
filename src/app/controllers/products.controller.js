const express = require("express");

const router = express.Router();
const config = require('../../config');
const bookService = require('../../services/book.service');
const qs = require('qs');
const categoryService = require("../../services/category.service");
var Paginator = require("paginator");
const limit = 6;

router.get('/', async (req, res, next) => {
    try {
        const {sort: sortFilter } = req.query;
        const pageAsNum = req.query.page? Number(req.query.page) : 1;

        let page = 1
        if(!Number.isNaN(pageAsNum)&&pageAsNum>0){
            page = pageAsNum;
        }

        let products = [];
        if(sortFilter===''){
            const totalBooks = await bookService.searchBook(req.query);
            const countBooks = totalBooks.length;
            var paginator = new Paginator(limit, 2);
            var pagination_info = paginator.build(countBooks, page);
            products = await bookService.searchBookByLimit(req.query, limit*(page-1), limit);
        }
        else{
            const totalBooks = await bookService.searchBookAndSorted(req.query);
            const countBooks = totalBooks.length;
            var paginator = new Paginator(limit, 2);
            var pagination_info = paginator.build(countBooks, page);
            products = await bookService.searchBookAndSortedByLimit(req.query, limit*(page-1), limit);
        }
        console.log(pagination_info);

        const categories = await categoryService.getAllCategories();
        const { sort, ...withoutSort } = req.query;
        res.render('customer/products', {pagination_info, products, categories, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
    } catch (error) {
        console.log(error);
    }
});

router.get('/category/:id', async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const books = await bookService.getBooksByCategoryId(categoryId);
        const categories = await categoryService.getAllCategories();
        res.render('customer/products', { products: books , categories, searchUrl: 'customer/products/search', originalUrl: req.baseUrl, layout: 'customer-main'});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const query = JSON.parse(JSON.stringify(req.query));
        console.log('query: ', query);
        const result = await bookService.searchBook(query);
        res.render('customer/products', { products: result, searchUrl: 'customer/products/search' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;