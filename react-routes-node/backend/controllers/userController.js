const db = require("../models");

module.exports = {
  verify: function(req, res) { //is user in DB ? verify : add new user
    console.log(req.body);
    if(db.User.find({name : req.body.username}).count() > 0){
      res.send({user: 'old'});  
      }else{
        db.User
        .create(req.body)
        .then(dbModel => res.json({user: 'new'}))
        .catch(err => res.status(422).json(err));
      } 
  }
};