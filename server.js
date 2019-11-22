const { join } = require('path')
const express = require('express')

const app = express()
const db = require('./config')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, 'public')))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

require('./routes')(app)

db.sync({ force: true })
  .then(() => app.listen(PORT))
  .catch(e => console.log(e))
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

