class ProductDetailsController{
    // [GET] /news
    index(req, res){
        res.render('product_details')
    }

    show(req, res){
        res.send('Product Detail');
    }
}

module.exports = new ProductDetailsController;
