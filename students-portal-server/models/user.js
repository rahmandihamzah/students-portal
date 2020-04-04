'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate (models) {
      User.belongsTo(models.Department)
      User.belongsTo(models.Generation)
      User.belongsTo(models.Role)
    }
  }

  User.init({
    memberTag: DataTypes.STRING,
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'First name sould not be empty'
        }
      }
    },
    lastName: DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'username sould not be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          msg: 'email sould not be empty'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [9],
          msg: 'Invalid phone number format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password sould not be empty'
        },
        len: {
          args: [6],
          msg: 'Minimum length of password is 6'
        }
      }
    },
    photo_url: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ["student", "graduate"]
    },
    DepartmentId: DataTypes.INTEGER,
    GenerationId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: function (user, options) {
        user.password = hashPassword(user.password)
      }
    }
  })
  
  return User;
};