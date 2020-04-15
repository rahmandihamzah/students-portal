const axios = require('axios')

export const studentsPortalApi = axios.create({
  baseURL: "http://localhost:3000"
})