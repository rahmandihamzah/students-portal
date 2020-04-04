const bcrypt = require('bcryptjs')
const salt = Number(process.env.SALT)

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (inputPassword, hashedPassword) => {
  return bcrypt.compareSync(inputPassword, hashedPassword)
}

module.exports = { hashPassword, comparePassword }