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
    return this._whiskies.sort(function (a, b) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  },

  get: function get(name) {
    return this._whiskies.filter(function (item, idx) {
      return item.name.toLowerCase() === name;
    })[0];
  }

});

module.exports = whiskyStore;