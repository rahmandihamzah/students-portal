'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate (models) {

    }
  }

  User.init({
    memberTag: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    status: DataTypes.STRING,
    DepartmentId: DataTypes.INTEGER,
    GenerationId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER,
    ShowreelId: DataTypes.STRING
  }, {
    sequelize
  })
  
  return User;
};