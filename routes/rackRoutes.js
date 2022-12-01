const { Router } = require("express");
//const rackRoute = require("../controllers/rackControler");

const {getRack, addRack} = require("../controllers/rackControler");

const rackRoutes = Router();

rackRoutes.get("/rack/:rackID", getRack);
rackRoutes.post("/rack/:slotID/:rackID/:bicycle/:rackX/:rackY", addRack);


module.exports = rackRoutes;
