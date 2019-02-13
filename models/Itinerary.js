const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
//in the city name you refer to city collection and the city property of that collection, so the city name here is
//filled with the city name coming form city collection.
const ItinerarySchema = new Schema({
  // lala: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "city"
  // },
  city: {
    type: String,
    ref: "city.city"
  },
  title: {
    type: String
  },
  profilePic: {
    type: String
  },
  rating: {
    type: Number
  },
  duration: {
    type: Number
  },
  price: {
    type: Number
  },
  hashtag: {
    type: String
  }
});

//"city" will be made plurar and will be the name of collection and has to be the same name as the model name i.e. City.js
module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
