const axios = require('axios')

export const studentsPortalApi = axios.create({
  baseUrl: 'http://localhost:3000'
})