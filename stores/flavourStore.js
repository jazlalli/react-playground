var assign = require('object-assign');
var EventEmitter = require('eventemitter').EventEmitter;

var flavours = [
  'sweetness',
  'fruity',
  'floral',
  'body',
  'smokey',
  'tobacco',
  'medicinal',
  'winey',
  'spicy',
  'malty',
  'nutty',
  'honey'
];

var flavourStore = assign({}, EventEmitter.prototype, {

  _flavours: flavours,

  getAll: function getAll() {
    return this._flavours;
  }

});

module.exports = flavourStore;