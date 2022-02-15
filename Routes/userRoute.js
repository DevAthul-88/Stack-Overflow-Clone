const Router = require("express").Router();
const userCtrl = require("../Controllers/userCtrl");

Router.route("/allUsers").get(userCtrl.getAllUsers);
Router.route("/user/:id").get(userCtrl.getUserById);
Router.route("/create").post(userCtrl.createANewUser);
Router.route("/login").post(userCtrl.login);

module.exports = Router;
