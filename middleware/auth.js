const userSchema = require("../Schema/userSchema");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    if (
      req.headers["authorization"] &&
      req.headers.startswith("authorization")
    ) {
      const token = req.headers["authorization"].split("")[0];

      if (token) {
        const user = jwt.verify(token, async (err, data) => {
          if (err) return err;
          const user = await userSchema.findOne({ _id: data.id });
          return user;
        });

        req.user = user;
        next();
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = authMiddleware;
