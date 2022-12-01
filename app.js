const express = require("express");
const bodyParser = require("body-parser");
const bicycleRoute = require("./routes/bicycleRoute");

const app = express();

app.use(bodyParser.json());
app.use(bicycleRoute);

app.listen(3001, () => {
  console.log("cambio de adrian");
});
