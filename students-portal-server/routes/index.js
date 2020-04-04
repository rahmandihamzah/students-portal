const express = require('express')
const route = express.Router()
const userRoutes = require('./userRoutes')
const adminRoute = require('./adminRoutes')

route.get('/', (req, res) => {
  console.log('ya')
  res.send('WELCOME')
})
route.use('/user', userRoutes)
route.use('/admin', adminRoute)

module.exports = route