/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App.jsx');
var Whisky = require('./Whisky.jsx');
var WhiskyDetail = require('./WhiskyDetail.jsx');
var Map = require('./Map.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>

    <Route name="whiskies" path="/whisky" handler={Whisky}>
      <Route name="whisky" path=":whisky" handler={WhiskyDetail} />
    </Route>

    <Route name="map" path="/map" handler={Map}/>

  </Route>
);

if (typeof window !== "undefined") {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
} else {
  module.exports = routes;
}
