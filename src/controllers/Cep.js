const DadosCep = require('../models/DadosCep');
const api = require('../services/api');

const create = async (cep) => {
  try {
    const {data} = await api.get(`/?cep=${cep}`);
    if (data.code != 200) return;
    // Insert into Database
    const response = await DadosCep.insertCep(data);
    return response;
  } catch (error) {
    console.log(error.message); // Error in Request
  }
}
const index = async () => {
  try {
    // Show data from the database
    const response = await DadosCep.findAll();
    return response;
  } catch (error) {
    console.log(error.message); // Error in Request
  }
}

module.exports = {
  create,
  index
}