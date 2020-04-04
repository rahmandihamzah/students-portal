const { Admin } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class AdminController {
  static signUp (req, res, next) {
    const {
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      password
    } = req.body

    Admin.create({
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      password,
      RoleId: 1
    })
      .then(response => {
        res.status(201).json({
          msg: 'Sign an admin up complete',
          response
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static signIn (req, res, next) {
    const { userInput, password } = req.body
    let err = {
      name: ''
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isEmail = re.test(String(userInput).toLowerCase())

    if (isEmail)
    {
      Admin.findOne({
        where: {
          email: userInput
        }
      })
        .then(response => {
          if (response)
          {
            const isValid = comparePassword(password, response.password)
            if (isValid)
            {
              const payload = {
                id: response.id,
                email: response.email,
                userName: response.userName
              }
              const access_token = generateToken(payload)
              res.status(200).json({
                msg: 'Signed in',
                access_token
              })
            }
          } else
          {
            err.name = 'invalidInputSignIn'
            next(err)
          }
        })
        .catch(err => {
          next(err)
        })
    } else
    {
      Admin.findOne({
        where: {
          userName: userInput
        }
      })
        .then(response => {
          if (response)
          {
            const isValid = comparePassword(password, response.password)
            if (isValid)
            {
              const payload = {
                id: response.id,
                email: response.email,
                userName: response.userName
              }
              const access_token = generateToken(payload)
              res.status(200).json({
                msg: 'Signed in',
                access_token
              })
            }
          } else
          {
            err.name = 'invalidInputSignIn'
            next(err)
          }
        })
        .catch(err => {
          next(err)
        })
    }
  }
}

module.exports = AdminController