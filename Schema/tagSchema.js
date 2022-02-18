const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    index:{unique:true , sparse:false},
    required:false,
    
  },
});

const model = mongoose.model("tag", tagSchema);

module.exports = model;
