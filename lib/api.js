"use strict";

const PUBLIC_KEY = '48b5ede2a36dbf966d39a3056674aaf2';
const TOKEN = '827c4f33a7b7c8063463313d1a553364455aeda85c2129ed5d587fa52deb2a19';

const Trello = require('node-trello');

module.exports = new Trello(PUBLIC_KEY, TOKEN);
