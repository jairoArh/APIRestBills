const express = require('express')

const app = express()

const cors = require('cors')

//Connect mongoose
require('./drivers/connect-db')

//settings
app.set('port',process.env.PORT || 3000 )

//middleware
app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({extended:true}))
app.use('/bills',require('./routes/bills'))
app.use('/customers',require('./routes/customer'))

app.listen(app.get('port'),()=>console.log(`Server at port ${app.get('port')}`))
