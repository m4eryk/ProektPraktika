const mongoose = require('mongoose');

const Shema  = mongoose.Schema;


const postShema = new Shema({
    name : String,
    text : String,
    img : String,
    exampls: String
})

module.exports = mongoose.model('pst', postShema, 'post')