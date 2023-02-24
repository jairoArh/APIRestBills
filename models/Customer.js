const mongoose = require('mongoose')

const {Schema} = mongoose

const CustomerSchema =new Schema({
    nit : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    birthday :{
        type : Date,
        required : false
    },
    bills : [
        {
            type : Schema.Types.ObjectId,
            ref : 'bill'
        }
    ]
})

module.exports = mongoose.model('customer',CustomerSchema)