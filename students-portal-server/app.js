if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = Number(process.env.PORT)
const cors = require('cors')

const routes = require('./routes')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log('server running on port', port)
})