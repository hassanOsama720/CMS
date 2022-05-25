const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    username: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'patient', 'doctor','employee'],
        default: 'admin'
    }
})

module.exports = mongoose.model("user", schema);
