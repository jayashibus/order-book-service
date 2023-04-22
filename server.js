console.log("I am here");

// server.js
const express = require("express");
const bodyParser = require("body-parser");
const orderBookRoutes = require("./routes/orderBookRoutes");

const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());

// Use orderBookRoutes as the routing module
app.use("/instruments", orderBookRoutes);

// Start the server
const port = process.env.PORT || 5020;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
