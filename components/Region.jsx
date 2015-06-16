/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Header = require('./Header.jsx');
var Map = require('./WhiskyDetail.jsx');

var regionStore = require('../stores/regionStore');

var Region = React.createClass({

  getInitialState: function () {
    return {regions: regionStore.getAll()};
  },

  componentDidMount: function () {
    if (window && !window.isInitialLoad) {
      regionStore._regions = window.regions;
      this.setState({regions: regionStore.getAll()});
    }
  },

  render: function () {
    var Regions = [];

    if (this.state.regions) {
      this.state.regions.forEach(function (r) {
        Regions.push(
          <li key={r}>
            <Link to='region' params={{region: r.toLowerCase()}}>{r}</Link>
          </li>
        );
      });
    }

    return (
      <section className="regions">
        <div className="col-1-4 list-container">
          <ul className="main-list">
            { Regions }
          </ul>
        </div>
        <RouteHandler />
      </section>
    );
  }
});

module.exports = Region;
