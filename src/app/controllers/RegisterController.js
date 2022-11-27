class RegisterController{
    // [GET] /news
    index(req, res){
        res.render('register')
    }

    show(req, res){
        res.send('Register');
    }
}

module.exports = new RegisterController;
