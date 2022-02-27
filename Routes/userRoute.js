const Router = require("express").Router();
const userCtrl = require("../Controllers/userCtrl");
const auth = require("../middleware/auth");


Router.route("/allUsers").get(userCtrl.getAllUsers);
Router.route("/user/:id").get(userCtrl.getUserById);
Router.route("/searchUsers").get(userCtrl.searchUser);
Router.route("/create").post(userCtrl.createANewUser);
Router.route("/login").post(userCtrl.login);
Router.route("/user/:id").put(auth, userCtrl.edit);

module.exports = Router;
