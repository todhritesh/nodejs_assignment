const mongoose = require('mongoose')
const {DB_URL} = require('../config')

mongoose.connect(DB_URL, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error',console.error.bind(console,'connection error'))

db.once('open',()=>{
    console.log('connected to db')
})