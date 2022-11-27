class SpecialOfferController{
    // [GET] /news
    index(req, res){
        res.render('special_offer')
    }

    show(req, res){
        res.send('Special Offer');
    }
}

module.exports = new SpecialOfferController;
