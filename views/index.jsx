const React = require('react')
const Layout = require('./Layout')
const CookieForm = require('./CookieForm')
const CookieTable = require('./CookieTable')

module.exports = props => {
  return (
    <Layout>
      <div className="row">
        <div className="col s12 m10 l10 push-m1 push-l1">
          <CookieForm />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6 l6">
          <CookieTable cookies={
            props.cookies.filter(cookie => !cookie.devoured)
          } title="Baked" icon="fas fa-cookie"/>
        </div>
        <div className="col s12 m6 l6">
          <CookieTable cookies={
            props.cookies.filter(cookie => cookie.devoured)
          } title="Devoured" icon="fas fa-cookie-bite"/>
        </div>
      </div>
    </Layout>
  )
}