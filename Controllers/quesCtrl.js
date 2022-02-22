const quesSchema = require("../Schema/quesSchema");
const tagSchema = require("../Schema/tagSchema");
const { v4: uuid } = require("uuid");
const { findById, findOne } = require("../Schema/quesSchema");

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
      console.log(data);
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
        { $push: { 'upVote': {userId:req.body.userId} } }
      );
      await quesSchema.updateOne(
        { _id: id },
        { $pull: { 'downVote':{userId:req.body.userId} } }
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
};
