const mongoose = require('mongoose')

const URI = 'mongodb://127.0.0.1:27017/sales'

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser:true, useUnifiedTopology:true
}

mongoose.connect(URI,options)
    .then(()=>console.log('Connect DB Success'))
    .catch( e => console.log(e))

module.exports = mongoose