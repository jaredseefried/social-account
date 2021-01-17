const router = require("express").Router();
const signupController = require("../../controller/signupController");

router.route("/")
  .get(signupController.findAll)
  .post(signupController.create)

module.exports = router