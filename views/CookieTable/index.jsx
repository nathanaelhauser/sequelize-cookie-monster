const React = require('react')
const CookieCell = require('../CookieCell')

module.exports = props => {
  return (
    <table>
      <tr>
        <th><h1>{props.title}</h1></th>
      </tr>
      {
        props.cookies.map(cookie => {
          return(
            <tr key={cookie.id}>
              <CookieCell name={cookie.name} devoured={cookie.devoured} cookieid={cookie.id} />
            </tr>
          )
        })
      }
    </table>
  )
}