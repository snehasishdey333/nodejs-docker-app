const mongoose = require("mongoose");
const express = require("express");
const dotenv=require("dotenv");
const  connectDB  = require("./Database/connectDB");
const userRoutes = require("./routes/userRouter");
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, async() => {
  await connectDB()
  console.log("App is running on port: "+process.env.PORT);
});
