
const router = require("express").Router();
const user = require("./register");

router.use("/user", user);

module.exports = router;