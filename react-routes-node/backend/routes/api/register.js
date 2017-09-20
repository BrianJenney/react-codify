const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/createuser")
  .post(userController.create);

router.route("/register")
  .get(userController.register);

module.exports = router;

