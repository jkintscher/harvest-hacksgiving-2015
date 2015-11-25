"use strict";

const API = require('./api');
const Card = require('./card');

function pickRandomCard(cards) {
  let cardIdx = Math.floor(Math.random() * (cards.length - 1) + 1);
  return cards[cardIdx];
}

let Board = module.exports = class {
  constructor(properties) {
    this.id = properties.id;
    this.name = properties.name;
    this.description = properties.desc;
  }

  static load(id, callback) {
    API.get(`/1/boards/${id}`, (err, data) => {
      if (err) throw err;
      callback(new Board(data));
    });
  }

  loadCards(callback) {
    API.get(`/1/boards/${this.id}/cards`, (err, cards) => {
      if (err) throw err;
      cards = cards.map((card) => new Card(card));
      callback(cards);
    });
  }

  getRandomCard(callback) {
    this.loadCards((cards) => callback(pickRandomCard(cards)));
  }
};

