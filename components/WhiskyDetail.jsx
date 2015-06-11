/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var FlavourGraph = require('./FlavourGraph.jsx');

var whiskyStore = require('../stores/whiskyStore');

var WhiskyDetail = React.createClass({

  mixins: [Router.State],

  render: function () {
    var params = this.getParams();
    var whisky = whiskyStore.get(params.whisky);

    var flavourKeys = [
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

    var profile = {};

    if (whisky) {
      flavourKeys.forEach(function (key) {
        profile[key] = whisky[key]
      });
    }

    return (
      <div className="col-2-3">
        <h3>{ whisky.name }</h3>
        <p>{ whisky.description }</p>

        <h4>Profile</h4>
        <FlavourGraph profile={ profile } />
      </div>
    );
  }
});

module.exports = WhiskyDetail;