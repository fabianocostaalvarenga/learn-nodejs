'strict mode';

const app = require('./config/server');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, function () {
  console.log('Servido executando na porta: '+port);
})