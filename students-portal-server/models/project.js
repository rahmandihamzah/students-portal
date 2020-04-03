'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model {
    static associate (models) {
      
    }
  }

  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    reel: DataTypes.STRING
  }, {
    sequelize
  })
  
  return Project;
};