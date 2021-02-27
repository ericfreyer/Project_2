require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: "",
    database: "audiobridge_db",
    host: "127.0.0.1:3306",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  }
  // production: {
  //   use_env_variable: "JAWSDB_URL",
  //   dialect: "mysql"
  // }
};

