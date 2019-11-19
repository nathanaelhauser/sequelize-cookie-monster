const React = require('react')

// Cell in CookieTable
module.exports = props => {
  return (
    <td className={(props.devoured === 1) ? 'devoured' : 'cookie'} 
    data-cookieid={props.cookieid} data-devoured={props.devoured}>
      <div>
        <h4>{props.name}</h4>
      </div>
    </td>
  )
}