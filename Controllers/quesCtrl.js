const quesSchema = require("../Schema/quesSchema");
const tagSchema = require("../Schema/tagSchema");
const { v4: uuid } = require("uuid");
const req = require("express/lib/request");

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
  newest: async (req, res) => {
    try {
      const data = await quesSchema.find().sort({createdAt:1})
      res.json({data:data})
    } catch (error) {
      res.json({ error: error.message });
    }
  }
};
