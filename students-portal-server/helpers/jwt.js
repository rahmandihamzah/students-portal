const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET_KEY

const generateToken = (payload) => {
  jwt.sign(payload, secret_key)
}

const verifyToken = (token) => {
  jwt.verify(token)
}

module.exports = { generateToken, verifyToken }