"use strict";

const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Admin extends sequelize.Sequelize.Model {
    static associate(models) {
      Admin.belongsTo(models.Role);
    }
  }

  Admin.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "First name sould not be empty",
          },
        },
      },
      lastName: DataTypes.STRING,
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "username sould not be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            args: true,
            msg: "Email sould not be empty",
          },
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Phone number sould not be empty",
          },
          len: {
            args: [9],
            msg: "Invalid phone number format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Password sould not be empty",
          },
          len: {
            args: [6],
            msg: "Minimum length of password is 6",
          },
        },
      },
      RoleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      hooks: {
        beforeCreate: function (admin, options) {
          admin.password = hashPassword(admin.password);
        },
      },
    }
  );

  return Admin;
};
