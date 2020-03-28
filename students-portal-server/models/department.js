'use strict';
module.exports = (sequelize, DataTypes) => {
  class Department extends sequelize.Seqielize.Model {
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