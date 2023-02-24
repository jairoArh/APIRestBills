const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/sales'

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(()=>console.log('Connect DB Success'))
    .catch( e => console.log(e))

module.exports = mongoose