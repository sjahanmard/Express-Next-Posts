const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://localhost/AlienDBex";
// const url = " from mlab.be sure to replace user and password"
// use .env file for this

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

con.on("open", () => {
  console.log("connected broooooooooooooo");
});
app.use(express.json());

const alienRouter = require("./routes/aliens");
app.use("/api/aliens", alienRouter);

app.listen(9000, () => {
  console.log("server is running on 9000");
});
