class ComponentsController{
    // [GET] /news
    index(req, res){
        res.render('components')
    }

    show(req, res){
        res.send('Components');
    }
}

module.exports = new ComponentsController;
