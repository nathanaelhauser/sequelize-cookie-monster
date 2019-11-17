const db = require('../connection')

module.exports = {
  
  getAllCookies(cb) {
    db.query('SELECT * FROM cookies', (err, cookies) => {
      if (err) {
        console.log(err)
      }
      cb(cookies)
    })
  },

  getOneCookie(id, cb) {
    db.query(`SELECT * FROM cookies WHERE id = ${id}`, (err, cookie) => {
      if (err) {
        console.log(err)
      }
      cb(cookie)
    })
  },

  addCookie(cookie, cb) {
    db.query(`INSERT INTO cookies (name) VALUES ("${cookie.name}")`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  },

  updateCookie(id, devoured, cb) {
    db.query(`UPDATE cookies SET devoured = "${devoured}" WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  },

  deleteCookie(id) {
    db.query(`DELETE FROM cookies WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  }

}