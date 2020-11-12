const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
});

module.exports = credentials = mongoose.model('Credentials', loginSchema);
