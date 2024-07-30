// Update with your config settings.
/*
  @type { Object.<string, import("knex").Knex.Config> }

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
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
*/
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root", 
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "bookstore"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
