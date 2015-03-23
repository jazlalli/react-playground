/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Map = React.createClass({
  render: function () {
    return (
      <section>
        <h1>Locations</h1>

        <RouteHandler/>
      </section>
    );
  }
});

module.exports = Map;
