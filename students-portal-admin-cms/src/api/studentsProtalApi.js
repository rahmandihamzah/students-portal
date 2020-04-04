const axios = require('axios')

const studentsPortalApi = axios.create({
  baseUrl: 'http://localhost:3000'
})

module.exports = studentsPortalApi