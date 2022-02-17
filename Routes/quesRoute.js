const Router = require('express').Router();
const quesRoute = require('../Controllers/quesCtrl')
const auth = require('../middleware/auth')

Router.route("/create").post(auth , quesRoute.create);

module.exports = Router;