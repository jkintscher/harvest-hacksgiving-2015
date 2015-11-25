"use strict";

module.exports = class {
  constructor(properties) {
    this.id = properties.id;
    this.name = properties.name;
    this.labels = properties.labels.map((label) => label.name);
    this.url = properties.shortUrl;

    let parsed = properties.desc.split(/#.*\n/);
    this.address = parsed[1].trim();
    this.menu = parsed[2].trim();
    this.description = parsed[3].trim();
  }
};

