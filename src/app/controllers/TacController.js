class TacController{
    // [GET] /news
    index(req, res){
        res.render('tac')
    }

    show(req, res){
        res.send('Terms and Conditions');
    }
}

module.exports = new TacController;
