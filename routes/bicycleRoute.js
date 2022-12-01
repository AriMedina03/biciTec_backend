const {Router } = require("express");

const { getBicycle, addBicycle } = require("../controllers/bicycleControler");

const bicycleRoute = Router();

bicycleRoute.get("/bicycle/:bicycleId/", getBicycle); 

bicycleRoute.post("/bicycle/:bicycleId/:position_x/:position_y/:vel/:accel", addBicycle);

module.exports = bicycleRoute; 