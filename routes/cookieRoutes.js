const { cookies } = require('../controllers')

module.exports = app => {

  app.get('/cookies', (req, res) => {
    cookies.getAllCookies(cookies => res.json(cookies))
  })

  app.get('/cookies/:id', (req, res) => {
    cookies.getOneCookie(parseInt(req.params.id), cookie => res.json(cookie))
  })

  app.post('/cookies', (req, res) => {
    cookies.addCookie(req.body, () => res.sendStatus(200))
  })

  app.put('/cookies/:id', (req, res) => {
    cookies.updateCookie(parseInt(req.params.id), req.body.devoured, () => res.sendStatus(200))
  })

  app.delete('/cookies/:id', (req, res) => {
    cookies.deleteCookie(parseInt(req.params.id), () => res.sendStatus(200))
  })

}