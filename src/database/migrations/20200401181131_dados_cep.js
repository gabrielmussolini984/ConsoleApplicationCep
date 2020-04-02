exports.up = function(knex) {
  return knex.schema.createTable('dados_cep', function(table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('cep');
    table.string('endereco');
    table.string('bairro');
    table.string('cidade');
    table.string('estado');
    table.json('retorno_api');
    table.timestamps(false, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dados_cep');
};
