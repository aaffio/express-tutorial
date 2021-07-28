const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const playersRouter = require("./routes/players");

//use all the good things!
app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//all your route here
app.use("/players", playersRouter);

app.listen(port, function () {
  console.log("Runnning on " + port);
});

module.exports = app;
