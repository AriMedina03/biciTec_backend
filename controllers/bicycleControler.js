const mysql = require('../database/db');
//const { connect } = require("../database/db");
//const connection = require("../database/db");


class MainController{
async addBicycle(req , res){
console.log("Add bicycle")
console.log(req.params.bicycleId)
console.log (req.params.position_x)
console.log (req.params.position_y)
console.log (req.params.vel)
console.log(req.params.accel)
if(req.params.bicycleId != null) 
{
let bicycleId = req.params.bicycleId
let position_x = req.params.position_x;
let position_y = req.params.position_y;
let vel = req.params.vel; 
let accel =req.params.accel;
var sql = `insert into bicycleControl (bicycleId, position_x, position_y, vel, accel) 
values ( '${bicycleId}', ${position_x}, ${position_y}, ${vel}, ${accel});` 
mysql.query(sql, (error,data, _fields) => {
if(error) {
    res.status(500)
    res.send(error.message)
} else {
console.log(data)
res.json({
    status: 200,
    message: "Log uploaded successfully",
    affectedRows: data.affectedRows
})
}
})
} else {
res.send('no se subieron correctamente los datos')
}
}

async getBicycle (req,res){
    console.log(req.body);
    res.send("Get Logs")

if(req.params.biciId!=null){
    //let biciId = req.params.biciId;
    var sql = `SELECT * FROM bicycleControl`
mysql.query(sql, (error, data) => {
if(error) {
    res.status(500)
    res.send(error, message)
    res.send("re chin")
} else {
console.log(data)
res.json({data})
}
})
}
}
}
const bicycleControler = new MainController()
module.exports = bicycleControler