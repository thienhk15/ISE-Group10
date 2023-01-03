class customerController{
    // [GET] /news
    components(req, res){
        res.render('customer/components', {layout: 'customer-main'})
    }
    contact(req, res){
        res.render('customer/contact', {layout: 'customer-main'})
    }
    faq(req, res){
        res.render('customer/faq', {layout: 'customer-main'})
    }
    forgetpass(req, res){
        res.render('customer/forgetpass', {layout: 'customer-main'})
    }
    home(req, res){
        res.render('customer/home', {layout: 'customer-main'})
    }
    legal_notice(req, res){
        res.render('customer/legal_notice', {layout: 'customer-main'})
    }
    login(req, res){
        res.render('customer/login', {layout: 'customer-main'})
    }
    logout(req, res){
        res.clearCookie("user")
        res.redirect('/')
    }
    normal(req, res){
        res.render('customer/normal', {layout: 'customer-main'})
    }
    product_details(req, res){
        res.render('customer/product_details', {layout: 'customer-main'})
    }
    product_summary(req, res){
        res.render('customer/product_summary', {layout: 'customer-main'})
    }
    register(req, res){
        res.render('customer/register', {layout: 'customer-main'})
    }
    special_offer(req, res){
        res.render('customer/special_offer', {layout: 'customer-main'})
    }
    tac(req, res){
        res.render('customer/tac', {layout: 'customer-main'})
    }
    profile(req,res){
        res.render('customer/profile');
    }
}

module.exports = new customerController;
