const express = require("express");
const { Sequelize, DataTypes } = require('sequelize');
const router = express.Router();
const config = require('../../config');
const userService = require('../../services/user.service');
const bcrypt = require('bcryptjs')
const { uuid } = require('uuidv4');
const qs = require('qs');
const { render } = require("node-sass");
const Model = require('../../models/user.model');
const { application } = require("express");

class loginController{
    // [POST] /login/find
    async checkLogin(req, res){
        const { email, password } = req.body;  
        const user = await userService.findUser(email, password)
        if(user != null)
        {
            res.cookie('user', user);
            res.redirect('/');
        }                
        else
            res.render('customer/login', {message: 'Wrong email or password!'})
            
    }
}

module.exports = new loginController;
