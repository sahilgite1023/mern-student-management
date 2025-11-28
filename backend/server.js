const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

let port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const StudentRoutes = require("./routes/studentRoutes");


app.use("/students", StudentRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => { console.log("mongodb is connected") })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("server is running");
});
