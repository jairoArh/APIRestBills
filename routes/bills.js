const route = require('express').Router()

const {
    index,
    save
} = require('../controllers/controll-bills')

route.get('/',index)

route.post('/:id',save)

module.exports = route