/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Home = require('./Home.jsx');
var App = require('./App.jsx');
var Whisky = require('./Whisky.jsx');
var WhiskyDetail = require('./WhiskyDetail.jsx');
var Region = require('./Region.jsx');
var Map = require('./Map.jsx');

var routes = (
  <Route>
    <Route name="home" path="/" handler={Home} />

    <Route handler={App}>
      <Route name="whiskies" path="/whisky" handler={Whisky}>
        <Route name="whisky" path=":primary" handler={WhiskyDetail} />
        <Route name="compare" path=":primary/compare/:secondary" handler={WhiskyDetail} />
      </Route>

      <Route name="regions" path="/region" handler={Region}>
        <Route name="region" path=":region" handler={Map} />
      </Route>
    </Route>

  </Route>
);

if (typeof window !== "undefined") {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
} else {
  module.exports = routes;
}
