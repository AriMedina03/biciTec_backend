const { Router } = require("express");

const getBycicles = require("../controllers/bicycleControler");

const bicycleRoute = Router();

bicycleRoute.get("/bicycle/:bicycleId", getBycicles);

module.exports = bicycleRoute;
