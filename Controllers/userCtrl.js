const userSchema = require("../Schema/userSchema");
const bcrypt = require("bcrypt");

module.exports = {
  createANewUser: async (req, res) => {
    try {
      const checkUser = await userSchema.findOne({email:req.body.email});
      if(checkUser) return res.json({error: "User already exists"})
      const encryptedPassword = await bcrypt.hash(req.body.password , 10)
      const userObject = {
        userName: req.body.userName,
        email: req.body.email,
        password:encryptedPassword
      }
      const User = new userSchema(userObject)
      User.save();
      res.json({success: true})
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
