const quesSchema = require("../Schema/quesSchema");
const tagSchema = require("../Schema/tagSchema");
const { v4: uuid } = require("uuid");

module.exports = {
  create: async (req, res) => {
    try {
      const { tags } = req.body;

      const tag = await tags.map((e) => {
        return {
          name: e,
        };
      });

      await tagSchema.insertMany(tag , {ordered:false});
      res.json({ status: true });
    } catch (error) {
      
    }
  },
};
