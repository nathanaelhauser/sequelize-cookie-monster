const { cookies } = require('../controllers')

module.exports = app => {

  // Main view
  app.get('/', (req, res) => 
    cookies.getAllCookies(cookies => 
      res.render('index', { cookies })))

}