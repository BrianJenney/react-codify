const express = require('express')
const app = express();
const mongo = require('mongodb');
const mongoose = require("mongoose");
const uri = 'mongodb://brianjenney:freestyl1@ds115701.mlab.com:15701/react';

app.listen(process.env.PORT || 8081);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//ROUTES
require('./routes/register.js')(app);
