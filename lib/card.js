"use strict";

module.exports = class {
  constructor(properties) {
    this.id = properties.id;
    this.board = properties.idBoard;
    this.list = properties.idList;
    this.name = properties.name;
    this.labels = properties.labels;
    this.url = properties.shortUrl;

    let parsed = properties.desc.split(/#.*\n/);
    this.address = parsed[1].trim();
    this.menu = parsed[2].trim();
    this.description = parsed[3].trim();
  }
};
