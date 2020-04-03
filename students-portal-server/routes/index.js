const express = require('express')
const router = express.Router()
const departmentRoutes = require('./departmentRoutes')

router.get('/', (req, res) => {
  console.log('ya')
  res.send('WELCOME')
})

router.use('/department', departmentRoutes)

module.exports = router