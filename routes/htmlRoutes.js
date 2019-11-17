const { cookies } = require('../controllers')

module.exports = app => {

  app.get('/', (req, res) => 
    cookies.getAllCookies(cookies => 
      res.render('index', { cookies })))

}