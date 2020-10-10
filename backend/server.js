const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const items = require("./routes/api/items");

const app = express();

//  bodyParser miidleware

app.use(bodyParser.json());

// mongo db config

// const db = require("./config/keys").mongoURI;
const db = process.env.ATLAS_URI;
// connect to mongodb

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongodb is connected");
});

// use Routes

app.use("/api/GetProduct", items);

//  Port to run application
const port = process.env.PORT || 5000;

// app listen to port to run on server
app.listen(port, () => console.log(`server is started... ${port}`));
