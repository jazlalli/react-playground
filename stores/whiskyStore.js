var db = require('../data/db');
var assign = require('object-assign');
var EventEmitter = require('eventemitter').EventEmitter;

var whiskies = [];

if (typeof window !== 'undefined') {
  whiskies = window.whiskies;
}

var whiskyStore = assign({}, EventEmitter.prototype, {

  _whiskies: whiskies,

  getAll: function getAll() {
    return this._whiskies;
  }
});

module.exports = whiskyStore;