const mysql = require('mysql2');
require('dotenv').config();

const db_config = {
  localPool: mysql.createPool({
    host: process.env.DB_HOSTNAME,
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  })
}

module.exports = db_config.localPool;