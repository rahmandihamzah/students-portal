'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Admins', ['email'], {
      type: 'unique',
      name: 'unique_constraint_email_admin'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Admins', 'unique_constraint_email_admin')
  }
};
