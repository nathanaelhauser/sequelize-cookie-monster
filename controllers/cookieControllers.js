const db = require('../connection')

module.exports = {
  
  // Get all cookies from db
  getAllCookies(cb) {
    db.query('SELECT * FROM cookies', (err, cookies) => {
      if (err) {
        console.log(err)
      }
      cb(cookies)
    })
  },

  // Get a cookie from db
  getOneCookie(id, cb) {
    db.query(`SELECT * FROM cookies WHERE id = ${id}`, (err, cookie) => {
      if (err) {
        console.log(err)
      }
      cb(cookie)
    })
  },

  // Add a cookie to db
  addCookie(cookie, cb) {
    db.query(`INSERT INTO cookies (name) VALUES ("${cookie.name}")`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  },

  // Update a cookie in db
  updateCookie(id, devoured, cb) {
    db.query(`UPDATE cookies SET devoured = "${devoured}" WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  },

  // Delete a cookie from db
  deleteCookie(id) {
    db.query(`DELETE FROM cookies WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  }

}