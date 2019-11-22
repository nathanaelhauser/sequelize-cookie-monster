const { Cookies } = require('../models')

module.exports = app => {
  // Main view
  app.get('/', (req, res) => {
    Cookies.findAll()
      .then(cookies => res.render('index', { cookies }))
      .catch(e => console.log(e))
  })
}