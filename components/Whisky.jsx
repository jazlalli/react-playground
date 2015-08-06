/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./Header.jsx');
var WhiskyDetail = require('./WhiskyDetail.jsx');

var whiskyStore = require('../stores/whiskyStore');
var compareStore = require('../stores/compareStore');

var Whisky = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    return {whiskies: whiskyStore.getAll()};
  },

  componentDidMount: function () {
    if (window && !window.isInitialLoad) {
      whiskyStore._whiskies = window.whiskies;
      this.setState({whiskies: whiskyStore.getAll()});
    }
  },

  onClick: function (whisky) {
    compareStore.addToCompare(whisky);

    var primary = compareStore.getPrimary();
    var secondary = compareStore.getSecondary();

    if (secondary) {
      this.context.router.transitionTo('compare', {
        primary: primary.name.toLowerCase(),
        secondary: secondary.name.toLowerCase()
      });

    } else {
      this.context.router.transitionTo('whisky', {
        primary: primary.name.toLowerCase()
      });
    }
  },

  render: function () {
    var self = this;
    var primary = compareStore.getPrimary();
    var active = '';
    var Whiskies = [];

    if (this.state.whiskies) {
      this.state.whiskies.forEach(function (w) {
        if (primary && primary.name.toLowerCase() === w.name.toLowerCase()) {
          active = 'active';
        } else {
          active = '';
        }

        Whiskies.push(
          <li key={w.name} className={active}>
            <span onClick={self.onClick.bind(self, w)}>{w.name}</span>
          </li>
        );
      });
    }

    return (
      <div>
        <Header />
        <section className="whiskies">
          <div className="col-1-4 list-container">
            <ul className="main-list">
              { Whiskies }
            </ul>
          </div>
          <RouteHandler />
        </section>
      </div>
    );
  }
});

module.exports = Whisky;
