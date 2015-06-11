/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./Header.jsx');

var App = React.createClass({

  render: function () {
    return (
      <div className="col-1-1">
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
