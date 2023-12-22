const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks.routes");
const { mongoConnection } = require("./configs/mongoConnect");
const notFound = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/tasks", taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const runApp = (port) => {
  mongoConnection()
    .then((res) => {
      app.listen(port);
      console.log(`App is running on PORT ${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
runApp(port);
