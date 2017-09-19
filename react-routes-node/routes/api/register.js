const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/createuser/:user")
  .post(userController.create);

router.route("/register/:user")
  .post(userController.register);

module.exports = router;

