module.exports = app => {
  require('./cookieRoutes')(app)
  require('./htmlRoutes')(app)
}