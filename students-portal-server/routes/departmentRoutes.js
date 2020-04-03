const express = require('express')
const route = express.Router()
const DepartmentController = require('../controllers/departmentController')

route.get('/', DepartmentController.getAll)

module.exports = route