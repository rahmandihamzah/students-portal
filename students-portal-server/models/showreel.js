'use strict';
module.exports = (sequelize, DataTypes) => {
  class Showreel extends sequelize.Sequelize.Model {
    static associate (models) {

    }
  }

  Showreel.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    reel: DataTypes.STRING
  }, {
    sequelize
  })
  
  return Showreel;
};