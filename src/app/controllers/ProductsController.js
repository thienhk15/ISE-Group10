class ProductsController{
    // [GET] /news
    index(req, res){
        res.render('products')
    }

    show(req, res){
        res.send('Products');
    }
}

module.exports = new ProductsController;
