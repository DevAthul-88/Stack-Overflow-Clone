require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user/" , userRoute)

mongoose.connect(process.env.MONGO_DB_URL, (err) => {
  if (err) {
    console.log("Error while connecting to MongoDB");
    process.exit(1);
  }
  console.log("Connection established");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
