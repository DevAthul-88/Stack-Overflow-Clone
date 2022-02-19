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

      const Ques = new quesSchema({
        id:req.user._id,
        userName: req.user.userName,
        title:req.body.title,
        description: req.body.description,
        tags:req.body.tags,
      })
      res.json({ status: true });
      await tagSchema.insertMany(tag , {ordered:false}); 
      
    } catch (error) {
      
    }
  },
};
