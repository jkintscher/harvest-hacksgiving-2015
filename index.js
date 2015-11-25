"use strict";

const http = require('http');
const BOARD_ID = '56535fa5c071b19aab2ad5b6';

let card = {};

// Randomly select today’s lunch card
require('./lib/board').load(BOARD_ID, (board) =>
  board.getRandomCard((data) => card = data)
);

// Serve it up
const server = http.createServer((req, res) => {
  if (req.url !== '/') {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end();
  }

  res.end(require('./templates/index')(card));
});

server.listen(8080);

