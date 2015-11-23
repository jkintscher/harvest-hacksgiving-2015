"use strict";

module.exports = class {
  constructor(properties) {
    this.id = properties.id;
    this.description = properties.desc;
    this.board = properties.idBoard;
    this.list = properties.idList;
    this.name = properties.name;
    this.labels = properties.labels;
    this.url = properties.shortUrl;
  }
};

