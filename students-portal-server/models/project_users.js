'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project_users extends sequelize.Sequelize.Model {
    static associate (models) {

    }
  }

  Project_users.init({
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })
  
  return Project_users;
};