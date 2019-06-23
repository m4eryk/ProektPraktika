const mongoose = require('mongoose');

const Shema  = mongoose.Schema;


const postShema = new Shema({
    tree : Array
})

module.exports = mongoose.model('tre', postShema, 'tree')