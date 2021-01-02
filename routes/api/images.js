const router = require("express").Router();
const imageController = require("../../controller/imageController");

router.route("/")
  .get(imageController.findAll)
  .post(imageController.create)
  

module.exports = router