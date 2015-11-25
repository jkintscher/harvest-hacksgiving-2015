"use strict";

const BOARD_ID = '56535fa5c071b19aab2ad5b6';

let card = {};

// Randomly select today’s lunch card
require('./lib/board').load(BOARD_ID, (board) =>
  board.getRandomCard((data) => card = data)
);

