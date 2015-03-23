/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App.js');
var Whisky = require('./Whisky.js');
var Map = require('./Map.js');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="whisky" path="/whisky" handler={Whisky}/>
    <Route name="map" path="/map" handler={Map}/>
  </Route>
);

if (typeof window !== "undefined") {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document);
  });
} else {
  module.exports = routes;
}
