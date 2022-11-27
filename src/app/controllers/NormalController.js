class NormalController{
    // [GET] /news
    index(req, res){
        res.render('normal')
    }

    show(req, res){
        res.send('Normal');
    }
}

module.exports = new NormalController;
