// const { cookies } = require('../controllers')
const { Cookies } = require('../models')

module.exports = app => {

  // Get all cookies
  app.get('/cookies', (req, res) => {
    Cookies.findAll()
      .then(cookies => res.json(cookies))
      .catch(e => console.log(e))
    // cookies.getAllCookies(cookies => res.json(cookies))
  })

  // Get a cookie
  app.get('/cookies/:id', (req, res) => {
    Cookies.findOne({ where: { id: parseInt(req.params.id) }})
      .then(cookie => res.json(cookie))
      .catch(e => console.log(e))
    // cookies.getOneCookie(parseInt(req.params.id), cookie => res.json(cookie))
  })

  // Add a cookie
  app.post('/cookies', (req, res) => {
    Cookies.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
    // cookies.addCookie(req.body, () => res.sendStatus(200))
  })

  // Update a cookie
  app.put('/cookies/:id', (req, res) => {
    Cookies.findOne({ where: { id: parseInt(req.params.id) }})
      .then(cookie => cookie.update(req.body))
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
    // cookies.updateCookie(parseInt(req.params.id), req.body.devoured, () => res.sendStatus(200))
  })

  // Delete a cookie
  app.delete('/cookies/:id', (req, res) => {
    Cookies.findOne({ where: { id: parseInt(req.params.int) }})
      .then(cookie => cookie.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
    // cookies.deleteCookie(parseInt(req.params.id), () => res.sendStatus(200))
  })

}