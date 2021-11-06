const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  name: {
    trim: true,
    //cuts off whitespaces
    type: String,
    required: true,
  },
  tech: {
    trim: true,
    type: String,
    required: true,
  },
  sub: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Alien", alienSchema);
