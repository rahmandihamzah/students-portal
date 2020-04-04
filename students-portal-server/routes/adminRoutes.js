const express = require('express')
const route = express.Router()
const AdminController = require('../controllers/adminController')

route.post('/signUp', AdminController.signUp)
route.post('/signIn', AdminController.signIn)

module.exports = route