/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');

var regionStore = require('../stores/regionStore');

var Map = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function () {
    var params = this.context.router.getCurrentParams();
    var region = regionStore.get(decodeURIComponent(params.region));

    return (
      <div>
        <h1>MAP</h1>
      </div>
    );
  }
});

module.exports = Map;
