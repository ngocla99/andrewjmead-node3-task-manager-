const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.use("/", (req, res) => {
  res.send("Welcome to the task app!");
});

module.exports = app;
