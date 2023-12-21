const express = require("express");
const app = express();
const taskRouter = require("./starter/routes/tasks.routes");
const { mongoConnection } = require("./starter/configs/mongoConnect");
const notFound = require("./starter/middlewares/notFound");

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notFound);
app.use("/api/v1/tasks", taskRouter);

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
