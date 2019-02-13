const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ActivitySchema = new Schema({
  itineraryReference: {
    type: String,
    ref: "itinerary.title"
  },
  image: {
    type: String
  },
  title: {
    type: String
  }
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);
