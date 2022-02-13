const Router = require('express').Router();
const userCtrl  = require('../Controllers/userCtrl')

Router.route("/create").post(userCtrl.createANewUser);

module.exports = Router;