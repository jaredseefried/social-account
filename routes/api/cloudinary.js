const router = require("express").Router();
const formidable = require('formidable');
const cloudinary = require('cloudinary')
require('dotenv').config()

router.route("/")
.get(async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET
    })
    console.log("connected to cloudinary");
  } catch (e) {
    console.log(e)
  }
  cloudinary.v2.api.resources()
})
.post(async (req, res, next) => {
  let uploadResult
  
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET
    })
    console.log("connected to cloudinary");
  } catch (e) {
    console.log(e)
  }
  
  let form = new formidable.IncomingForm()
  form.keepExtensions = true;
  
  // formidable parses the form data; you should console.log to see what this looks like
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files)
    if (err) {
      console.log(err)
    }

    // Now we're working with whatever files have been uploaded
    const values = Object.values(files)

    // Sending each uploaded file to cloudinary
    const promises = values.map(image => cloudinary.uploader.upload(image.path, "unsigned"))

    // The results object sent back from cloudinary gives all of cloudinary's data for the file it just received. You'll probably store some of that data, like filename and _id value, in your Mongo or MySQL DB
    
    Promise.all(promises).then(results => {
      res.status(200).json({ result: "success", payload: results })
      next()
    })
  })
});

module.exports = router