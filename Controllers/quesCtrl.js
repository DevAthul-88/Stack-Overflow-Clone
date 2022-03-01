const quesSchema = require("../Schema/quesSchema");
const tagSchema = require("../Schema/tagSchema");
const { v4: uuid } = require("uuid");
const { findById, findOne } = require("../Schema/quesSchema");
const res = require("express/lib/response");

module.exports = {
  create: async (req, res) => {
    try {
      const { tags } = req.body;

      const tag = await tags.map((e) => {
        return {
          name: e,
        };
      });

      const Ques = new quesSchema({
        id: req.user._id,
        userName: req.user.userName,
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
      });
      res.json({ status: true });
      Ques.save();
      await tagSchema.insertMany(tag, { ordered: false });
    } catch (error) {}
  },

  allTags: async (req, res) => {
    try {
      const count = await quesSchema.aggregate([
        { $project: { tags: 1 } },
        { $unwind: "$tags" },
        { $group: { _id: "$tags", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]);
      res.json({ tag: count });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  searchTag: async (req, res) => {
    try {
      const { search } = req.query;
      const data = await quesSchema.aggregate([
        { $project: { tags: 1 } },
        { $unwind: "$tags" },
        { $group: { _id: "$tags", count: { $sum: 1 } } },
        { $match: { _id: { $regex: search, $options: "i" } } },
        { $sort: { count: -1 } },
      ]);
      res.json({ tag: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  byId: async (req, res) => {
    try {
      const { id } = req.params;

      const data = await quesSchema.findById(id);
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  comment: async (req, res) => {
    try {
      const comment = {
        comment: req.body.comment,
        userId: req.body.userId,
        userName: req.body.userName,
        date: req.body.date,
        commentId: uuid(),
      };
      await quesSchema.updateOne(
        { _id: req.params.id },
        { $push: { replies: comment } }
      );

      const data = await quesSchema.findOne({ _id: req.params.id });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteComment: async (req, res) => {
    try {
      await quesSchema.updateOne(
        { _id: req.params.id },
        {
          $pull: {
            replies: { commentId: req.body.commentId, userId: req.body.userId },
          },
        }
      );

      const data = await quesSchema.findOne({ _id: req.params.id });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  upVote: async (req, res) => {
    try {
      const { id } = req.params;

      await quesSchema.updateOne(
        { _id: id },
        { $push: { upVote: { userId: req.body.user } } }
      );
      await quesSchema.updateOne(
        { _id: id },
        { $pull: { downVote: { userId: req.body.user } } }
      );

      const data = await quesSchema.findOne({ _id: id });

      res.json({ data: data });
    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message });
    }
  },

  downVote: async (req, res) => {
    try {
      const { id } = req.params;

      await quesSchema.updateOne(
        { _id: id },
        { $pull: { upVote: { userId: req.body.user } } }
      );
      await quesSchema.updateOne(
        { _id: id },
        { $push: { downVote: { userId: req.body.user } } }
      );

      const data = await quesSchema.findOne({ _id: id });

      res.json({ data: data });
    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message });
    }
  },
  newest: async (req, res) => {
    try {
      const data = await quesSchema.find().sort({ createdAt: -1 });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  answer: async (req, res) => {
    try {
      const { id } = req.params;
      const d = req.body;
      await quesSchema.updateOne({ _id: id }, { $push: { answer: d } });
      const data = await quesSchema.findOne({ _id: id });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteAnswer: async (req, res) => {
    try {
      await quesSchema.updateOne(
        { _id: req.params.id },
        {
          $pull: { answer: { id: req.body.answerId, userId: req.body.userId } },
        }
      );

      const data = await quesSchema.findOne({ _id: req.params.id });

      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  upVoteAns: async (req, res) => {
    try {
      const { id } = req.params;

      await quesSchema.updateOne(
        { _id: id, "answer.id": req.body.answerId },
        { $push: { "answer.$.upVote": { userId: req.body.user } } }
      );

      await quesSchema.updateOne(
        { _id: id, "answer.id": req.body.answerId },
        { $pull: { "answer.$.downVote": { userId: req.body.user } } }
      );

      const data = await quesSchema.findOne({ _id: id });

      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  downVoteAns: async (req, res) => {
    try {
      const { id } = req.params;

      await quesSchema.updateOne(
        { _id: id, "answer.id": req.body.answerId },
        { $push: { "answer.$.downVote": { userId: req.body.user } } }
      );

      await quesSchema.updateOne(
        { _id: id, "answer.id": req.body.answerId },
        { $pull: { "answer.$.upVote": { userId: req.body.user } } }
      );

      const data = await quesSchema.findOne({ _id: id });

      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  editQuestion: async (req, res) => {
    try {
      const data = {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags.split(","),
      };
      await quesSchema.updateOne(
        { _id: req.body.quesId, id: req.body.userId },
        { $set: data }
      );
      res.json({ status: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  deleteQues: async (req, res) => {
    try {
      const { id } = req.params;

      await quesSchema.deleteOne({ _id: id });
      res.json({ status: true });
    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message });
    }
  },

  featured: async (req, res) => {
    try {
      const data = await quesSchema.find().sort({ upVote: -1 });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  inter: async (req, res) => {
    try {
      const data = await quesSchema.find().sort({ answer: -1 });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  tags: async (req, res) => {
    try {
      const data = await quesSchema
        .find({ tags: req.params.id })
        .sort({ answer: -1 });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  tagsF: async (req, res) => {
    try {
      const data = await quesSchema
        .find({ tags: req.params.id })
        .sort({ upVote: -1 });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  tagsI: async (req, res) => {
    try {
      const data = await quesSchema
        .find({ tags: req.params.id })
        .sort({ answer: -1 });
      res.json({ data: data });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  YourAnswersNewest: async (req, res) => {
    try {
      const {id} = req.params
      const data = await quesSchema.find({"answer.$.userId":id})
      res.json({data: data})
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  YourAnswersOldest: async (req, res) => {
    try {
      const {id} = req.params
      const data = await quesSchema.find({"answer.$.userId":id}).sort({createdAt: -1})
      res.json({data: data})
    } catch (error) {
      res.json({ error: error.message });
    }
  }

};
