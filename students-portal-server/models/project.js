'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    reel: DataTypes.STRING,
    tags: DataTypes.ARRAY
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};