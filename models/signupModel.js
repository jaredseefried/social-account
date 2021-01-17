const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
  email: {
    type: String,
  },

  retypeEmail: {
    type: String,
  },

  password: {
    type: String,
  },

  retypePassword: {
    type: String,
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const Signup = mongoose.model("Signup", SignupSchema);

module.exports = Signup;