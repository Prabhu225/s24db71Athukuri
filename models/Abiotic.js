const mongoose = require("mongoose");

const AbioticSchema = mongoose.Schema({
  name: String,
  type: { type: String, minlength: 1, maxlength: 40 },
  cost: { type: Number, min: 0, max: 1000000 }
});

module.exports = mongoose.model("Abiotic", AbioticSchema);
