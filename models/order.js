const mongoose = require('mongoose');

//Schema

const orderSchema = new mongoose.Schema({
    userId : {
        type:String
    },
    products : {
        type:Object
    }
})

module.exports = mongoose.model('Order', orderSchema);