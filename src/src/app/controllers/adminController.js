class adminController{
    chart(req, res){
        res.render('admin/chart', {layout: 'admin-main'});
    }
    error401(req, res){
        res.render('admin/error401', {layout: 'admin'})
    }
    error404(req, res){
        res.render('admin/error404', {layout: 'admin-main'})
    }
    error500(req, res){
        res.render('admin/error500', {layout: 'admin-main'})
    }
    forgetpass(req, res){
        res.render('admin/forgetpass', {layout: 'admin-main'})
    }
    home(req, res){
        res.render('admin/home', {layout: 'admin-main'})
    }
    light(req, res){
        res.render('admin/light', {layout: 'admin-main'})
    }
    login(req, res){
        res.render('admin/login', {layout: 'admin-main'})
    }
    register(req, res){
        res.render('admin/register', {layout: 'admin-main'})
    }
    static(req, res){
        res.render('admin/static', {layout: 'admin-main'})
    }
    table(req, res){
        res.render('admin/table', {layout: 'admin-main'})
    }
}

module.exports = new adminController;
