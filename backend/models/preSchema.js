const mongoose = require("mongoose");
// import { Prescription } from "src/app/_models/prescription";
const increment = require("mongoose-sequence")(mongoose);
const schema = new mongoose.Schema(
  {
    _id: Number,
    doctor: {
      type: Number,
      // required: true,
      ref: "doctor",
    },
    patient: {
      type: Number,
      // required: true,
      ref: "patient",
    },
    medicine: [
      {
        type: Number,
        ref: "medicine_schema",
      },
    ],
    date: {
      type: Date,
    },
  },

  { _id: false }
);



// schema.plugin(increment);

schema.plugin(increment, { id: "prescriptionIncrement", inc_field: "_id" });
module.exports = mongoose.model("prescription", schema);
