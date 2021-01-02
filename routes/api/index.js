const router = require("express").Router();
const contactRoutes = require("./contacts");
const mailRoutes = require('./sendMail')
const postingRoutes = require('./posting')
const imageRoutes = require('./images')
const cloudinaryRoutes = require('./cloudinary')

router.use("/contacts", contactRoutes);
router.use('/sendMail', mailRoutes)
router.use('/posting', postingRoutes)
router.use('/images', imageRoutes)
router.use('/cloudinary', cloudinaryRoutes)

module.exports = router;
