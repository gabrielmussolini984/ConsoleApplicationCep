const connection = require('../database/connection');
module.exports = {
  async insertCep(data) {
    try {
      const {cep, logradouro: endereco, bairro, localidade: cidade, uf: estado} = data.result;
      const result = await connection('dados_cep').insert({cep, endereco, bairro, cidade, estado, nome: 'CEP', retorno_api: JSON.stringify(data)});
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async findAll() {
    try {
      const results = await connection('dados_cep').select('*');
      return results;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}