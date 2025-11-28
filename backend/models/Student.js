const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    class: String,
    percentage: Number,
})

module.exports = mongoose.model("Student",StudentSchema);