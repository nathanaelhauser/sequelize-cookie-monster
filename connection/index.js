module.exports = require('mysql2')
  .createConnection(process.env.JAWSDB_URL 
    ? process.env.JAWSDB_URL 
    : {
      host: 'localhost',
      user: 'root',
      password: 'groot',
      database: 'cookies_db'
    }
  )