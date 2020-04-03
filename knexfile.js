// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "cohort_36",

      // Only for linux users
      // username: "your postgres username",
      // password: "your postgres user password"
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};