const mongoose = require('mongoose');

const Shema  = mongoose.Schema;


const userShema = new Shema({
    email : String,
    password : String
})

module.exports = mongoose.model('user', userShema, 'users')