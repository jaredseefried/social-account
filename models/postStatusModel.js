const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  title: {
    type: String,
    trim: true
  },

  description: {
    type: String,
  },

  img: {
    type: String,
  },

  link: {
    type: String,
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const Posting = mongoose.model("Posting", PostingSchema);

module.exports = Posting;