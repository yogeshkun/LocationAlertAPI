const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }

})

const User =  mongoose.model('user_infos', userInfoSchema)

module.exports = User;
