const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {versionKey: false})

module.exports = mongoose.model('Token', tokenSchema)