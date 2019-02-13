const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UsergoogleSchema = new Schema({
  username: {
    type: String
  },
  googleid: {
    type: String
  }
});

//"city" will be made plurar and will be the name of collection and has to be the same name as the model name i.e. City.js
module.exports = Usergoogle = mongoose.model("usergoogle", UsergoogleSchema);
