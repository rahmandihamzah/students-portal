const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET_KEY

const generateToken = (payload) => {
  return jwt.sign(payload, secret_key)
}

const verifyToken = (token) => {
  return jwt.verify(token)
}

module.exports = { generateToken, verifyToken }