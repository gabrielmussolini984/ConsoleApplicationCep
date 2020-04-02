// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'test'
    },
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'test'
    },
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
