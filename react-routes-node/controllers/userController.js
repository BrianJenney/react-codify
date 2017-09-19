const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log(req);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function(req, res) {
    db.User
      .find({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};