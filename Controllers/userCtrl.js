const userSchema = require("../Schema/userSchema");
const bcrypt = require("bcrypt");

module.exports = {
  createANewUser: (req, res) => {
    try {
      console.log(req.body);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
