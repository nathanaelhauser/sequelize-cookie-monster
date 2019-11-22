module.exports = (Model, DataTypes, sequelize) => {
  class Cookies extends Model {}

  Cookies.init({
    name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: '0' }
  }, { sequelize, modelName: 's_cookie'})

  return Cookies
}