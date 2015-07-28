var assign = require('object-assign');
var EventEmitter = require('eventemitter').EventEmitter;

var primary = null,
    secondary = null;

var compareStore = assign({}, EventEmitter.prototype, {

  addToCompare: function addToCompare(whisky) {
    if (!primary) {
      primary = whisky;
    } else {
      secondary = whisky;
    }

    this.emit('CHANGED');
  },

  getPrimary: function getPrimary() {
    return primary || null;
  },

  getSecondary: function getSecondary() {
    return secondary || null;
  }

});

module.exports = compareStore;