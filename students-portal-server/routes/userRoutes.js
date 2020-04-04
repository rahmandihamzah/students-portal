const express = require('express')
const route = express.Router()
const UserController = require('../controllers/userController')

route.post('/signup', UserController.signUp)

module.exports = route