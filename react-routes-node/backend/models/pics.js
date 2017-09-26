// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

var PicsSchema = new Schema({

  //id of user who posted
  id: {
    type: Number
  },

  //url of pic
  url: {
    type: String,
    trim: true
  }

});

// Create the "User" model with our UserSchema schema
var Pics = mongoose.model("Pics", PicsSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Pics;
