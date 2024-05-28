const mysql = require('mysql2');

const db_config = {
  localPool: mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'budget_tracker'
  })
}

module.exports = db_config.localPool;