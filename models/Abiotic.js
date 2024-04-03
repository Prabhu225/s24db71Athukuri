const mongoose = require("mongoose")
const AbioticSchema = mongoose.Schema({
name: String,
type: String,
cost: Number
})
module.exports = mongoose.model("Abiotic",
AbioticSchema)
