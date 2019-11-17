const React = require('react')

module.exports = props => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel = "stylesheet" href = "./css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <link rel="stylesheet" href="./css/style.css"/>
        <title>Hungry Cookie Monster</title>
      </head>
      <body>
        
        <div className="container">
          {props.children}
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="./js/app.js"></script>
      </body>
    </html>
  )
}