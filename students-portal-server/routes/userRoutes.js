const express = require('express')
const route = express.Router()
const UserController = require('../controllers/userController')

route.post('/signup', UserController.signUp)
route.post('/signin', UserController.signIn)

module.exports = route