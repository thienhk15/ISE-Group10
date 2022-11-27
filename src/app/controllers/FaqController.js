class FaqController{
    // [GET] /news
    index(req, res){
        res.render('faq')
    }

    show(req, res){
        res.send('FAQ');
    }
}

module.exports = new FaqController;
