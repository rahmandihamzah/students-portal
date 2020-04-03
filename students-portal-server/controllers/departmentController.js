const { Department } = require('../models')

class DepartmentController {
  static getAll (req, res, next) {
    Department.findAll()
      .then((result) => {
        res.send('department')
      }).catch((err) => {
        
      });
  }
}

module.exports = DepartmentController