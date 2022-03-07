const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    index:{unique:true},
    required:true,
    trim:true
  },
});

const model = mongoose.model("tag", tagSchema);

module.exports = model;
