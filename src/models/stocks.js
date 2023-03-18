const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stockSchema = new Schema({
    name : {
        type:String,
        required:true
    } , 
    last : {
        type:String,
        required:true
    },
    buy : {
        type:String,
        required:true
    },
    sell : {
        type:String,
        required:true
    },
    volume : {
        type:String,
        required:true
    },
    base_unit : {
        type:String,
        required:true
    },
},{
    timestamps:true
})

const Stock = mongoose.model('Stock',stockSchema)

module.exports = Stock

