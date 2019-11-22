const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Cookies: require('./Cookies')(Model, DataTypes, sequelize)
}