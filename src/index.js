const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')
const path = require('path');
const route = require('./routes');
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
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => {})