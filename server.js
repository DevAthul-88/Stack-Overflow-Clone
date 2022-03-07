require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const quesRouter = require("./Routes/quesRoute");
const path = require("path")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user/", userRoute);
app.use("/api/question", quesRouter);

mongoose.connect(process.env.MONGO_DB_URL, (err) => {
  if (err) {
    console.log("Error while connecting to MongoDB");
    process.exit(1);
  }
  console.log("Connection established");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
