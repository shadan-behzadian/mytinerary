const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favouriteItineraries: {
    type: Array
  }

  //   ,
  //   date: {
  //     type: Date
  //   }
});

//"city" will be made plurar and will be the name of collection and has to be the same name as the model name i.e. City.js
module.exports = User = mongoose.model("user", UserSchema);
