/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./Header.jsx');

var App = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
