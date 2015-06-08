/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

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
            <span>{w.name}</span>
          </li>
        );
      });
    }

    return (
      <section>
        <RouteHandler/>

        <h1>Whiskies</h1>
        <ul>
          { Whiskies }
        </ul>

      </section>
    );
  }
});

module.exports = Whisky;
