/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Whisky = React.createClass({
  render: function () {
    return (
      <section>
        <h1>Things</h1>
        <ul>
          <li>A thing</li>
          <li>A thing</li>
          <li>A thing</li>
        </ul>

        <RouteHandler/>
      </section>
    );
  }
});

module.exports = Whisky;
