const { cookies } = require('../controllers')

module.exports = app => {

  // Get all cookies
  app.get('/cookies', (req, res) => {
    cookies.getAllCookies(cookies => res.json(cookies))
  })

  // Get a cookie
  app.get('/cookies/:id', (req, res) => {
    cookies.getOneCookie(parseInt(req.params.id), cookie => res.json(cookie))
  })

  // Add a cookie
  app.post('/cookies', (req, res) => {
    cookies.addCookie(req.body, () => res.sendStatus(200))
  })

  // Update a cookie
  app.put('/cookies/:id', (req, res) => {
    cookies.updateCookie(parseInt(req.params.id), req.body.devoured, () => res.sendStatus(200))
  })

  // Delete a cookie
  app.delete('/cookies/:id', (req, res) => {
    cookies.deleteCookie(parseInt(req.params.id), () => res.sendStatus(200))
  })

}