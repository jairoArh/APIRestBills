const route = require('express').Router()

const {
    index
} = require('../controllers/controll-bills')

route.get('/',index)

module.exports = route