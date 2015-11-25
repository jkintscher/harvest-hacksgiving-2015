"use strict";

const http = require('http');
const BOARD_ID = '56535fa5c071b19aab2ad5b6';

let card = {};
let is_team_lunch = (new Date().getDay() === 3);

// Randomly select today’s lunch card
require('./lib/board').load(BOARD_ID, (board) => {
  if (is_team_lunch) {
    board.getRandomTeamLunchCard((data) => card = data)
  } else {
    board.getRandomCard((data) => card = data)
  }
});

// Serve it
const server = http.createServer((req, res) => {
  if (req.url !== '/') {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end();
  }

  if (!card.id) {
    res.end();
    return;
  }

  res.end(require('./templates/index')(card, is_team_lunch));
});

server.listen(8080);

