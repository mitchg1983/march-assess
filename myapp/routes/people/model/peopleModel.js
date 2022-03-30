const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  email: String,
  favoriteMovies: [],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("people", peopleSchema);
