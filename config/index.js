const Sequelize = require('sequelize')

const SQL_URI = process.env.MYSQLCONNSTR_jawsdb || 'mysql://root:root@localhost/cookies_db';

module.exports = new Sequelize(SQL_URI, { dialect: 'mysql' });