const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("verify")
  .post(userController.verify);

module.exports = router;

