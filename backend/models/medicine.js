const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const medicine_schema = new mongoose.Schema({
   _id:Number,
  comercial_name: { type: String, required: true, trim: true, max: 50 },
  medical_name: { type: String, required: true, trim: true, max: 50 },
  manufacturer: { type: String, required: true, trim: true, max: 50 },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  type: { type: String, required: false },
  side_effects: { type: String, required: false },
  description: { type: String, required: false },
});
medicine_schema.plugin(AutoIncrement);

module.exports = mongoose.model("medicine_schema", medicine_schema);