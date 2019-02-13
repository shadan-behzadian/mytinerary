const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const CommentSchema = new Schema({
  itineraryReference: {
    type: String,
    ref: "itinerary.title"
  },
  message: {
    type: String
  },
  user: {
    type: String
  },
  date: {
    type: Date
  }
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
