const { User } = require('../models')

class UserController {
  static signUp (req, res, next) {
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