const mongoose = require('mongoose')

const {Schema} = mongoose

const BillSchema = new Schema({
    number : {
        type : String,
        required : true,
        unique : true
    },
    dateBill : {
        type : Date,
        required : true
    },
    value : {
        type : Number,
        required : true
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'customer'
    }
})

module.exports = mongoose.model('bill',BillSchema)