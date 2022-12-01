const { Router } = require("express");

const { getBycicles, addBycicles } = require("../controllers/bicycleControler");

const bicycleRoute = Router();

bicycleRoute.get("/bicycle/:bicycleId", getBycicles);
bicycleRoute.post("/bicycle/:bicycleId", addBycicles);

module.exports = bicycleRoute;
