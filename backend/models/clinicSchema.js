const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
isReq = true;
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: isReq },
  address: { type: String, required: isReq },

  doctor: {
    type: Number,
    ref: "doctor",
    required: isReq,
  },
});


schema.plugin(AutoIncrement, { id: "clinic_id" });
module.exports = mongoose.model("clinics", schema);