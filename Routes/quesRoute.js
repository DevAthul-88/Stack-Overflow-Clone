const Router = require("express").Router();
const quesRoute = require("../Controllers/quesCtrl");
const auth = require("../middleware/auth");

Router.route("/create").post(auth, quesRoute.create);
Router.route("/comment/:id").post(auth, quesRoute.comment);
Router.route("/comment/delete/:id").post(auth, quesRoute.deleteComment);
Router.route("/upVote/:id").post(auth , quesRoute.upVote);
Router.route("/tags").get(quesRoute.allTags);
Router.route("/searchTags").get(quesRoute.searchTag);
Router.route("/newest").get(quesRoute.newest);
Router.route("/idle/:id").get(quesRoute.byId);
module.exports = Router;
