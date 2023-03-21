const Sequelize = require('sequelize')

const SQL_URI = process.env.JAWSDB_URL || 'mysql://root:root@localhost/cookies_db';

module.exports = new Sequelize(SQL_URI);