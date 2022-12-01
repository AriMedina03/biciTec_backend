const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

const rack = require("./routes/rackRoutes");
const bicycle = require ("./routes/bicycleRoute");

/*app.get("/", (req, res) => {
  res.send("hola");
});*/

app.use(bicycle);
app.use (rack);

app.listen(3001, () => {
  console.log("corriendo");
});

