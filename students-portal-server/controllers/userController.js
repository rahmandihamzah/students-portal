const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static signUp(req, res, next) {
    const {
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      password
    } = req.body

    let userId
    User.findAll()
      .then(response => {
        userId = (response.length + 1).toString()
        if (userId.length == 1)
        {
          userId = `000${userId}`
        } else if (userId.length == 2)
        {
          userId = `00${userId}`
        } else if (userId.length == 3)
        {
          userId = `0${userId}`
        }
        let date = new Date().getDate().toString()
        if (date.length == 1) date = `0${date}`
        let month = new Date().getMonth().toString()
        if (month.length == 1) month = `0${month}`
        let year = new Date().getFullYear().toString()
        let initialYear = ''
        for (let i = 0; i < year.length; i++)
        {
          if (i == year.length - 1 || i == year.length - 2)
          {
            initialYear += year[i]
          }
        }

        const memberTagRegistered = `${userId}${date}${month}${initialYear}`

        return User.create({
          memberTag: memberTagRegistered,
          firstName,
          lastName,
          userName,
          email,
          phoneNumber,
          password
        })
      })
      .then(response => {
        res.status(201).json({
          msg: 'Sign up complete',
          response
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static signIn(req, res, next) {
    const { userInput, password } = req.body
    let err = {
      name: ''
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isEmail = re.test(String(userInput).toLowerCase())

    if (isEmail)
    {
      User.findOne({
        where: {
          email: userInput
        }
      })
        .then(response => {
          if (response) {
            const isValid = comparePassword(password, response.password)
            if (isValid) {
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
          } else {
            err.name = 'invalidInputSignIn'
            next(err)
          }
        })
        .catch(err => {
          next(err)
        })
    } else
    {
      User.findOne({
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

module.exports = UserController

// memberTag: DataTypes.STRING,
// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// userName: DataTypes.STRING,
// email: DataTypes.STRING,
// phoneNumber: DataTypes.STRING,
// password: DataTypes.STRING,
// photo_url: DataTypes.STRING,
// status: DataTypes.STRING,