/** @jsx React.DOM */

var React = require('react');
var FlavourGraph = require('./FlavourGraph.jsx');

var whiskyStore = require('../stores/whiskyStore');
var flavourStore = require('../stores/flavourStore');
var compareStore = require('../stores/compareStore');

var WhiskyDetail = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    var primary = compareStore.getPrimary();
    var secondary = compareStore.getSecondary();

    return {
      flavours: flavourStore.getAll(),
      primary: compareStore.getPrimary(),
      secondary: compareStore.getSecondary()
    };
  },

  onCompareChanged: function onCompareChanged() {
    this.setState({
      primary: compareStore.getPrimary(),
      secondary: compareStore.getSecondary()
    });
  },

  componentWillMount: function componentWillMount() {
    compareStore.on('CHANGED', this.onCompareChanged);
  },

  render: function () {
    var primary = this.state.primary;
    var secondary = this.state.secondary;

    var primaryProfile = {},
        secondaryProfile = {};

    if (primary) {
      this.state.flavours.forEach(function (key) {
        primaryProfile[key] = primary[key];
      });
    }

    if (secondary) {
      this.state.flavours.forEach(function (key) {
        secondaryProfile[key] = secondary[key];
      });
    }

    return (
      <div className="col-2-3 detail-container">
        <div className="content">
          <h2>{ primary.name }</h2>
          <p>{ primary.description }</p>
        </div>

        <div className="profile">
          <h3>Flavour Profile</h3>
          <FlavourGraph primary={primaryProfile} secondary={secondaryProfile} />
        </div>
      </div>
    );
  }
});

module.exports = WhiskyDetail;