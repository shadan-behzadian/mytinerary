const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const CitySchema = new Schema({
  country: {
    type: String
  },
  city: {
    type: String,
    unique: true
  }
});

//"city" will be made plurar and will be the name of collection and has to be the same name as the model name i.e. City.js
module.exports = City = mongoose.model("city", CitySchema);
