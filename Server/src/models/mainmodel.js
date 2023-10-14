
const mongoose = require('mongoose')
const schema = mongoose.Schema

const mainschema = new schema({
    tittle:{type:String},
    date:{type:String},
    time:{type:String},
    status:{type:String}
}) 
const mainmodel = mongoose.model('task',mainschema)
module.exports=mainmodel