
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
    let userName = req.query.username;
    //let email = req.query.email;
    let pw = req.query.password;

    let newUser = {
      username: userName,
      //email: email,
      password: pw
    }

    var user = new User(newUser);

    user.save(function(err, doc){
      if(err)
        res.send(err);
      else
      res.send(doc);
    })
  })

}
