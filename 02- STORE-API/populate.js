require("dotenv").config();

const Product = require("../02- STORE-API/models/product");
const jsonProducts = require("../02- STORE-API/products.json");
const { mongoConnect } = require("./configs/mongoConnect");

const port = process.env.PORT;

const startApp = async () => {
  try {
    mongoConnect();
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success !!!");
  } catch (err) {
    console.log(err);
  }
};
startApp(port);
