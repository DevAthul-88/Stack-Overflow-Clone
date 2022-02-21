const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },

    upVote: {
      type: Array,
      default: [],
      required: true,
    },
    downVote: {
      type: Array,
      default: [],
      required: true,
    },

    answer: {
      type: Array,
      default: [],
      required: true,
    },

    replies: {
      type: Array,
      default: [],
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("ques", quesSchema);

module.exports = model;
