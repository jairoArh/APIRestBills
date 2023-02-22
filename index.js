const express = require('express')

const app = express()

//Connect mongoose
require('./drivers/connect-db')

//settings
app.set('port',process.env.PORT || 3000 )

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/bills',require('./routes/bills'))
app.use('/customers',require('./routes/customer'))

app.listen(app.get('port'),()=>console.log(`Server at port ${app.get('port')}`))