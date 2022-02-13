const userSchema = require("../Schema/userSchema");
const bcrypt = require("bcrypt");
const generateToken = require("../config/generateToken")

module.exports = {
  createANewUser: async (req, res) => {
    try {
      const checkUser = await userSchema.findOne({email:req.body.email});
      if(checkUser) return res.json({error: "User already exists"})
      const encryptedPassword = await bcrypt.hash(req.body.password , 10)
      
      const User = new userSchema({
        userName: req.body.userName,
        email: req.body.email,
        password:encryptedPassword
      })
      User.save();
      res.json({success: true})
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  login: async (req , res) => {
    try {
      const {email, password} = req.body
      const user = await userSchema.findOne({email: email})
      if(!user) return res.json({error:"User not found"})
      const checkPassword = await bcrypt.compare(password , user.password)
      if(checkPassword) {
        const token = await generateToken(user._id)
        const userObject = {
          _id:user._id,
          userName:user.userName,
          email:user.email,
          createdAt:user.createdAt
        }

        res.json({status:true , token:token , userObject:userObject})
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  }
};
