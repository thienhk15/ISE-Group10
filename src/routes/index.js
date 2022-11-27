const ContactController = require('../app/controllers/ContactController');
const siteRouter = require('./site');
const contactRouter = require('./contact');
const compareRouter = require('./compair');
const componentsRouter = require('./components');
const faqRouter = require('./faq');
const forgetPassRouter = require('./forgetpass');
const legalNoticeRouter = require('./legal_notice');
const loginRouter = require('./login');
const normalRouter = require('./normal');
const productDetailsRouter = require('./product_details');
const productSummaryRouter = require('./product_summary');
const productsRouter = require('./product');
const registerRouter = require('./register');
const specialOfferRouter = require('./special_offer');
const tacRouter = require('./tac');

function route(app) {

    app.use('/contact', contactRouter);
    app.use('/compair', compareRouter);
    app.use('/components', componentsRouter);
    app.use('/faq', faqRouter);
    app.use('/forgetpass', forgetPassRouter);
    app.use('/legal_notice', legalNoticeRouter);
    app.use('/login', loginRouter);
    app.use('/normal', normalRouter);
    app.use('/product_details', productDetailsRouter);
    app.use('/product_summary', productSummaryRouter);
    app.use('/products', productsRouter);
    app.use('/register', registerRouter);
    app.use('/special_offers', specialOfferRouter);
    app.use('/tac', tacRouter);
    app.use('/', siteRouter);

}

module.exports = route;
