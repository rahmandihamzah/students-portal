'use strict';
module.exports = (sequelize, DataTypes) => {
  const Showreel = sequelize.define('Showreel', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    reel: DataTypes.STRING,
    tags: DataTypes.ARRAY
  }, {});
  Showreel.associate = function(models) {
    // associations can be defined here
  };
  return Showreel;
};