'use strict';
module.exports = (sequelize, DataTypes) => {
  class Role extends sequelize.Sequelize.Model {
    static associate (models) {

    }
  }

  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize
  })
  
  return Role;
};