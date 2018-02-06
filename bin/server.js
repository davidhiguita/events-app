#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../server.path')
var http = require('http')

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 3000
app.set('port', port)

/**
 * Create HTTP server.
 */

var server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  } else {
    console.log(`${error}`)
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  console.log(`listening on port ${port}`)
}
