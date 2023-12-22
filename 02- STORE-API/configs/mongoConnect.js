const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = { mongoConnect };
