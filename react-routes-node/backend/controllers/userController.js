const db = require("../models");

module.exports = {
  login: function(req, res) { //is user in DB ? verify : add new user
    console.log(req.body.email);
    if(db.User.find({email : req.body.email})){
      res.send({user: 'verified'}); 
    }
  },
  register: function(req, res){
    db.User.create(req.body)
    .then(doc => res.json(doc))
    .catch(err => res.json(err));
  }
};