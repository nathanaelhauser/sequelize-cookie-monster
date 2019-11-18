const React = require('react')

module.exports = props => {
  return(
    <div  className="header" style={
      { height: (props.height || "80px"), 
        width: (props.width || "100%"),
        position: "relative",
        display: "flex",
        alignItems: "center",
        top: "0",
        left: "0",
        right: "0"
      }}>
          <img id="header-img" src="./images/cookie_monster_face.png" alt="Cookie Monster" style={
            { position: "relative",
              height: "inherit",
              top: "0",
              width: "auto" 
            }}/>
    </div>
  )
}