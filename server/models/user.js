const mongoose = require('mongoose');

const Shema  = mongoose.Schema;


const userShema = new Shema({
    email : String,
    password : String,
    isAdmin : Boolean
})

module.exports = mongoose.model('user', userShema, 'users')