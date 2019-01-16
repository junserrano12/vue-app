const express = require('express')
// const serveStatic = require('serve-static')
const path = require('path')

// create the express app
const app = express()
const build = 'dist'
// create middleware to handle the serving the app
// app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
app.use(express.static(build));

app.get('*', function(req, res) {
  res.sendFile( path.join (__dirname, '/'+build+'/index.html'), function(err) {
    if (err) return res.status(500).send(err)
  })
})

// Create default port to serve the app on
const port = process.env.PORT || 8080

app.listen(port)

// Log a feedback that this is actually running
console.log('Server started on port ' + port)