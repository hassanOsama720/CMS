const mongoose =require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({
    _id:Number,
    name:String,
    phoneNumber:String,
    isMarried: Boolean,
    age:Number,
    address: String,
    gender:String,
    // image:String


})
schema.plugin(AutoIncrement,{id:"patient_id"});

module.exports=mongoose.model("patient",schema)