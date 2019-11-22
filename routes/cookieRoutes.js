const { Cookies } = require('../models')

module.exports = app => {

  // Get all cookies
  app.get('/cookies', (req, res) => {
    Cookies.findAll()
      .then(cookies => res.json(cookies))
      .catch(e => console.log(e))
  })

  // Get a cookie
  app.get('/cookies/:id', (req, res) => {
    Cookies.findOne({ where: { id: parseInt(req.params.id) }})
      .then(cookie => res.json(cookie))
      .catch(e => console.log(e))
  })

  // Add a cookie
  app.post('/cookies', (req, res) => {
    Cookies.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Update a cookie
  app.put('/cookies/:id', (req, res) => {
    Cookies.findOne({ where: { id: parseInt(req.params.id) }})
      .then(cookie => cookie.update(req.body))
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Delete a cookie
  app.delete('/cookies/:id', (req, res) => {
    Cookies.findOne({ where: { id: parseInt(req.params.int) }})
      .then(cookie => cookie.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}