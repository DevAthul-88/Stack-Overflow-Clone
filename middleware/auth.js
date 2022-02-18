require("dotenv").config();
const userSchema = require("../Schema/userSchema");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
       token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.TOKEN);
      const user = await userSchema.findOne({ _id: decoded.id });
      req.user = user;
      next();
    } catch (error) {
      res.json({ error: error.message });
    }
  }
};

module.exports = authMiddleware;
