const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    manufacturer: {
        type: String
    },
    photo: {
        type: String
    },
    price: {
        type: Number
    },
    type: {
        type: String
    }
}, {versionKey: false})

module.exports = mongoose.model('Product', productSchema)