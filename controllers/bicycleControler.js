const { connect } = require("../database/db");
const connection = require("../database/db");

const getBycicles = (req, res) => {
  console.log(req.body);
  res.send("ok");
};

const addBycicles = (req, res) => {
  const query = "INSERT INTO bicycle VALUES()";
  connection.query(query, (error, data, fields) => {
    if (error) {
      res.send({ msg: "error" });
    } else {
      res.send({ msg: "added bicycle" });
    }
  });
};

module.exports = { getBycicles, addBycicles };
