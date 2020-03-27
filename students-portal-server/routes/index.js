const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('ya')
  res.send('WELCOME')
})

module.exports = router