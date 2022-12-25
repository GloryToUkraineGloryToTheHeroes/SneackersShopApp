const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    token: {
        type: String
    },
    products: [{
        type: String
    }]
}, {versionKey: false})

module.exports = mongoose.model('User', userSchema)