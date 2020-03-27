'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};