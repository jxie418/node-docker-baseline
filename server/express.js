const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const debug = require('debug')('ndb-api');
const apiInit = require('../api');

function initExpressApi() {
  const app = express();
  const port = process.env.PORT || 3000;
  const server = http.createServer(app);

  app.set('port', port);

  // configure express
  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  function onError(error) {}

  function onListening() {
    debug(`PID: ${process.pid} is listening on port ${port}`);
  }

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  app.use((req, res, next) => {
    debug(`PID: ${process.pid} handling request`);
    next();
  });

  // allow api to configure the app
  apiInit(app);

  // catch all error handler
  // this must be defined last, after other app.use() and routes calls
  app.use((err, req, res, next) => {
    debug(err.stack);
    res.status(500).send({ message: err.message || 'unhandled exception' });
  });
}

module.exports = initExpressApi;
