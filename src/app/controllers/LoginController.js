class LoginController{
    // [GET] /news
    index(req, res){
        res.render('login')
    }

    show(req, res){
        res.send('Login');
    }
}

module.exports = new LoginController;
