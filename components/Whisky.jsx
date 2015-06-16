/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Header = require('./Header.jsx');
var WhiskyDetail = require('./WhiskyDetail.jsx');

var whiskyStore = require('../stores/whiskyStore');

var Whisky = React.createClass({

  getInitialState: function () {
    return {whiskies: whiskyStore.getAll()};
  },

  componentDidMount: function () {
    if (window && !window.isInitialLoad) {
      whiskyStore._whiskies = window.whiskies;
      this.setState({whiskies: whiskyStore.getAll()});
    }
  },

  render: function () {
    var Whiskies = [];

    if (this.state.whiskies) {
      this.state.whiskies.forEach(function (w) {
        Whiskies.push(
          <li key={w.name}>
            <Link to='whisky' params={{whisky: w.name.toLowerCase()}}>{w.name}</Link>
          </li>
        );
      });
    }

    return (
      <section className="whiskies">
        <div className="col-1-4 list-container">
          <ul className="main-list">
            { Whiskies }
          </ul>
        </div>
        <RouteHandler />
      </section>
    );
  }
});

module.exports = Whisky;
