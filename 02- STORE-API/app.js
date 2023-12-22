require("dotenv");

const express = require("express");
const app = express();

const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const { mongoConnect } = require("./configs/mongoConnect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send('<h1>STORE API</h1><a href="/api/v1/products">Product Route</a>');
});

const productRouter = require("./routes/product");

app.use("/api/v1/products", productRouter);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const startApp = (port) => {
  mongoConnect()
    .then((res) => {
      app.listen(port);
      console.log(`App is running on PORT ${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

startApp(port);
