"use strict";

const config = require('../config/trello.json');
const Trello = require('node-trello');

module.exports = new Trello(config.public_key, config.token);

