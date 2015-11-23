"use strict";

const API = require('./api');
const Card = require('./card');

let Board = module.exports = class {
  constructor(properties) {
    this.id = properties.id;
    this.name = properties.name;
    this.description = properties.desc;
    this.lists = properties.lists;
  }

  static load(id, callback) {
    API.get(`/1/boards/${id}`, (err, data) => {
      if (err) throw err;
      callback(new Board(data));
    });
  }

  getRandomCard(callback) {
    API.get(`/1/boards/${this.id}/cards`, (err, cards) => {
      if (err) throw err;
      let cardIdx = Math.floor(Math.random() * (cards.length - 1) + 1);
      callback(new Card(cards[cardIdx]));
    });
  }
};

