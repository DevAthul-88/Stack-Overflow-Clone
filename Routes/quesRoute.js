const Router = require("express").Router();
const quesRoute = require("../Controllers/quesCtrl");
const auth = require("../middleware/auth");

Router.route("/edit").put(auth, quesRoute.editQuestion);
Router.route("/create").post(auth, quesRoute.create);
Router.route("/comment/:id").post(auth, quesRoute.comment);
Router.route("/comment/delete/:id").post(auth, quesRoute.deleteComment);
Router.route("/delete/:id").delete(auth, quesRoute.deleteQues);
Router.route("/tags").get(quesRoute.allTags);
Router.route("/searchTags").get(quesRoute.searchTag);
Router.route("/newest").get(quesRoute.newest);
Router.route("/idle/:id").get(quesRoute.byId);
Router.route("/upVote/:id").post(auth, quesRoute.upVote);
Router.route("/ansVote/up/:id").post(auth, quesRoute.upVoteAns);
Router.route("/ansVote/down/:id").post(auth, quesRoute.downVoteAns);
Router.route("/downVote/:id").post(auth, quesRoute.downVote);
Router.route("/answer/:id").post(auth, quesRoute.answer);
Router.route("/answer/delete/:id").post(auth, quesRoute.deleteAnswer);
Router.route("/featured").get(quesRoute.featured);
Router.route("/inter").get(quesRoute.featured);
Router.route("/tags/:id").get(quesRoute.tags);
Router.route("/tags/f/:id").get(quesRoute.tagsF);
Router.route("/tags/i/:id").get(quesRoute.tagsI);
Router.route("/your/ans/newest/:id").get(auth , quesRoute.YourAnswersNewest);
Router.route("/your/ans/oldest/:id").get(auth , quesRoute.YourAnswersOldest);

module.exports = Router;
