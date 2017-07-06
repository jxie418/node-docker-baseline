const express = require('express');

const router = express.Router();

// register simple route
router.get('/', (req, res) => {
  res.send('Hello world\n');
});

function apiInit(app) {
  // handle all requests
  app.use('/', router);
}

module.exports = apiInit;
