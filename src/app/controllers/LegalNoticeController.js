class LegalNoticeController{
    // [GET] /news
    index(req, res){
        res.render('legal_notice')
    }

    show(req, res){
        res.send('Legal Notice');
    }
}

module.exports = new LegalNoticeController;
