const express = require('express');
const cors = require('cors');
const logger = require("morgan");
require("dotenv").config();
const path = require("path");

const heroRouter = require("./routes/api/superheroes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/static', express.static('public')); 
app.use('/static', express.static('image')); 

app.use("/api/superheroes", heroRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})


module.exports = app;