class CompairController{
    // [GET] /news
    index(req, res){
        res.render('compair')
    }

    show(req, res){
        res.send('Compair');
    }
}

module.exports = new CompairController;
