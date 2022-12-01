const { Router } = require("express");

const { getRack, addRack } = require("../controllers/rackControler", getRacks);

const rackRoutes = Router();

rackRoute.get("/bicycle/", getRack);
rackRoute.post("/bicycle/:bicycleId/:x/:y", addRack);

module.exports = rackRoutes;
