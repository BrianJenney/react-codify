const db = require("../models");

module.exports = {
  login: function(req, res) { //is user in DB ? verify : add new user
    if(db.User.find({userName : req.body.username}).count() > 0){
      res.send({user: 'old'}); 
    }
  },
  register: function(req, res){
    db.User.create(req.body)
    .then(doc => res.json(doc))
    .catch(err => res.json(err));
  }
};