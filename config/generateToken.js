require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = async (userId) => {
  const token = jwt.sign(userId, process.env.TOKEN, { expiresIn: "30d" });
  return token;
};
module.exports = generateToken;
