const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.JAWSDB_URL 
  ? process.env.JAWSDB_URL 
  :'mysql://root:groot@localhost/cookies_db')