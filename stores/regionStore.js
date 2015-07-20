var db = require('../data/db');
var assign = require('object-assign');
var EventEmitter = require('eventemitter').EventEmitter;

var regions = [];

if (typeof window !== 'undefined') {
  console.log('getting regions from window');
  regions = window.regions;
}

var regionStore = assign({}, EventEmitter.prototype, {

  _regions: regions,

  getAll: function getAll() {
    return this._regions;
  },

  get: function get(name) {
    return this._regions.filter(function (item) {
      return item.toLowerCase() === name;
    })[0];
  }

});

module.exports = regionStore;