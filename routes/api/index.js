const router = require("express").Router();
const contactRoutes = require("./contacts");
const mailRoutes = require('./sendMail')
const postingRoutes = require('./posting')
const imageRoutes = require('./images')
const cloudinaryRoutes = require('./cloudinary')
const signupFormRoutes = require('./signup')

router.use("/contacts", contactRoutes);
router.use('/sendMail', mailRoutes)
router.use('/posting', postingRoutes)
router.use('/images', imageRoutes)
router.use('/cloudinary', cloudinaryRoutes)
router.use('/signup', signupFormRoutes)

module.exports = router;
