const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require("node:path");
const app = express();

// Set EJS as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to serve static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//routes
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My message board Express app - listening on port ${PORT}!`);
});

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});