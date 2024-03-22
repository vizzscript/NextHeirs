const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const UserLoginModel = mongoose.model("user", UserSchema)

module.exports = UserLoginModel