const mongoose = require("mongoose");
require("dotenv").config({});
const mongoURL = process.env.MONGO_URL;

const mongoConnection = () => {
  return mongoose.connect(mongoURL);
};

module.exports = { mongoConnection };
