const React = require('react')
const Layout = require('./Layout')
const Background = require('./Background')
const Header = require('./Header')
const CookieForm = require('./CookieForm')
const CookieTable = require('./CookieTable')
const CookieSound = require('./CookieSound')

module.exports = props => {
  return (
    <Layout>
      <Background />
      <Header height="80px" />
      <div className="container">
        <div className="row">
          <div className="col s12 m10 l10 push-m1 push-l1">
            <CookieForm />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 l6">
            <CookieTable cookies={
              props.cookies.filter(cookie => !cookie.devoured)
            } title="Baked" icon="fas fa-cookie" />
          </div>
          <div className="col s12 m6 l6">
            <CookieTable cookies={
              props.cookies.filter(cookie => cookie.devoured)
            } title="Devoured" icon="fas fa-cookie-bite" />
          </div>
        </div>
      </div>
      <CookieSound />
    </Layout>
  )
}