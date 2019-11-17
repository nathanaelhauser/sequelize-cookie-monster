const React = require('react')

module.exports = props => {
  return (
    <td className="cookie" data-cookieid={props.cookieid} data-devoured={props.devoured}>
      <div>
        <h4>{props.name}</h4>
      </div>
    </td>
  )
}