const mysql = require('../database/db')
class MainController{
async addRack (req , res){
console.log("Add rack")
console.log(req.params.rackID)
console.log (req.params.slotID)
console.log (req.params.bicycle)
console.log(req.params.rackX)
console.log(req.params.rackY)

if(req.params.rackID != null) 
{
let rackID = req.params.rackID
let slotID = req.params.slotID;
let bicycle = req.params.bicycle;
let rackX= req.params.rackX; 
let rackY = req.params.rackY;
var sql = `insert into rackControl (rackID, slotID, bicycle, rackX, rackY) 
values ( '${rackID}','${slotID}', '${bicycle}', ${rackX}, ${rackY});` 
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


async getRack (req,res){
console.log("Get Logs")

if(req.params.rackID!=null){
    //let biciId = req.params.biciId;
    var sql = `SELECT * FROM rackControl`
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
const rackControler = new MainController()
module.exports = rackControler