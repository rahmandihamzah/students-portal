const express = require('express')
const route = express.Router()
const userRoutes = require('./userRoutes')

route.get('/', (req, res) => {
  console.log('ya')
  res.send('WELCOME')
})

route.use('/user', userRoutes)

module.exports = route