const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    fullName: String,
    numberPhone: String,
    password: String
})

module.exports = mongoose.model('users', userShema)