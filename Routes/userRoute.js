const Router = require('express').Router();
const userCtrl  = require('../Controllers/userCtrl')

Router.route("/create").post(userCtrl.createANewUser);
Router.route("/login").post(userCtrl.login);

module.exports = Router;