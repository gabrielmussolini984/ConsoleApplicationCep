const axios = require('axios');
const api = axios.create({
  baseURL: 'http://cep.bldstools.com'
})

module.exports = api;