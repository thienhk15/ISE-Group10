const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')
const path = require('path');
const route = require('./routes');
const { mainModule } = require('process');

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// http logger
app.use(morgan('combined'));

// template engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', hbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'customer-main',
}))

route(app);

app.listen(port, () => {})