'use strict';
module.exports = (sequelize, DataTypes) => {
  class Generation extends sequelize.Sequelize.Model {
    static associate (models) {

    }
  }

  Generation.init({
    name: DataTypes.STRING
  }, {
    seqeulize
  })
  
  return Generation;
};