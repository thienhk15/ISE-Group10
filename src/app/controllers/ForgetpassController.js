class ForgetpassController{
    // [GET] /news
    index(req, res){
        res.render('forgetpass')
    }

    show(req, res){
        res.send('Forget Password');
    }
}

module.exports = new ForgetpassController;
