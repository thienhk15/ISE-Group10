class ProductSummaryController{
    // [GET] /news
    index(req, res){
        res.render('product_summary')
    }

    show(req, res){
        res.send('Product Summary');
    }
}

module.exports = new ProductSummaryController;
