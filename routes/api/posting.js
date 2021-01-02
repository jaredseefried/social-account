const router = require("express").Router();
const postingController = require('../../controller/postStatusController')

router.route("/")
  .get(postingController.findAll)
  .post(postingController.create)
  
  
module.exports = router