require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  const token = jwt.sign(user , process.env.TOKEN, { expiresIn: "30d" });
  return token;
};
module.exports = generateToken;
