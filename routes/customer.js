const route = require('express').Router()

const {
    index,
    save,
    findById,
    update,
    erase
}= require('../controllers/controll-customers')

route.get('/',index)

route.post('/',save)

route.get('/:id',findById)

route.put('/:id',update)

route.delete('/:id',erase)

module.exports = route