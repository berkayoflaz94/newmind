const mongoose = require('mongoose');

//Schema

const productSchema = new mongoose.Schema({
    name : {
        type:String
    },
    price : {
        type:String
    },
    color : {
        type:String
    },
    stock : {
        type:Number
    }
})

module.exports = mongoose.model('Product', productSchema);