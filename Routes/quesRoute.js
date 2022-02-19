const Router = require("express").Router();
const quesRoute = require("../Controllers/quesCtrl");
const auth = require("../middleware/auth");

Router.route("/create").post(auth, quesRoute.create);
Router.route("/tags").get(quesRoute.allTags);
module.exports = Router;
