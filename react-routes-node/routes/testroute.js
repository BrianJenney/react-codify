
let User = require('../models/user.js');

const mongoose = require("mongoose");


const uri = 'mongodb://brianjenney:freestyl1@ds115701.mlab.com:15701/react';

mongoose.connect(uri);

let db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

module.exports = function(app) {

  app.get("/test", function(req, res){

    let newUser = {
      username: 'Brian',
      email: 'brianjenney@gmail.com',
      password: '123mememe'
    }

    var user = new User(newUser);

    user.save(function(err, doc){
      res.send(doc);
    })
  })

}
