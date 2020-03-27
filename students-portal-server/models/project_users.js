'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project_users = sequelize.define('Project_users', {
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Project_users.associate = function(models) {
    // associations can be defined here
  };
  return Project_users;
};