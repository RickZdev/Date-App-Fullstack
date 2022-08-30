const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: Number,
    required: false
  },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);