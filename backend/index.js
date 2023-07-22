const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
require('dotenv').config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MONGODB CONNECTED")
});

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
  });