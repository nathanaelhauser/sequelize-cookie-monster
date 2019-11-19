const React  = require('react')

// Form to receive more cookies
module.exports = props => {
  return(
    <form>
      <div className="input-field row">
        <input id="cookie-name" type="text" className="validate" />
        <label htmlFor="cookie-name">Cookie</label>
      </div>
      <div className="row">
        <button id="cookie-btn" className="waves-effect waves-light btn bgc-cookie-monster">Bake</button>
      </div>
    </form>
  )
}