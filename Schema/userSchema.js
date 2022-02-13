const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName:{
      type:String,
      required:true
  },
  email:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  },
  about:{
      type:String,
      default:"",
      required:true
  },
  reputation:{
      type:Number,
      default:0,
      required:true
  },
},{timestamps:true});

const user =  mongoose.model("User", userSchema);

module.exports = user;
