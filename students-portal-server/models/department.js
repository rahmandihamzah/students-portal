'use strict';
module.exports = (sequelize, DataTypes) => {
  class Department extends sequelize.Sequelize.Model {
    static associate (models) {

    }
  }

  Department.init({
    name: DataTypes.STRING
  }, {
    sequelize
  })
  
  return Department;
};