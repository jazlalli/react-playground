var assign = require('object-assign');
var EventEmitter = require('eventemitter').EventEmitter;

var regions = [];

if (typeof window !== 'undefined') {
  regions = window.regions;
}

var regionStore = assign({}, EventEmitter.prototype, {

  _regions: regions,

  getAll: function getAll() {
    return this._regions.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  },

  get: function get(name) {
    return this._regions.filter(function (item) {
      return item.toLowerCase() === name.toLowerCase();
    })[0];
  }

});

module.exports = regionStore;