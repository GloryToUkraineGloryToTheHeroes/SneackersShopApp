const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const url = 'mongodb://127.0.0.1:27017/react-redux-1'
const PORT = 5000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/user', require('./router/user.router'))
app.use('/product', require('./router/product.router'))
app.use('/filter', require('./router/filter.router'))

async function run(){
    try{
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('connect')
    }catch(err){
        console.log(err)
    }
}

run()

app.listen(PORT, '127.0.0.1', () => console.log(`Arbeitet auf port: ${PORT}`))