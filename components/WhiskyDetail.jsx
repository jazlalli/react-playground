/** @jsx React.DOM */

var React = require('react');
var FlavourGraph = require('./FlavourGraph.jsx');

var whiskyStore = require('../stores/whiskyStore');

var WhiskyDetail = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function () {
    var params = this.context.router.getCurrentParams();
    var whisky = whiskyStore.get(decodeURIComponent(params.whisky));

    var flavourKeys = [
      'sweetness',
      'fruity',
      'floral',
      'body',
      'smokey',
      'tobacco',
      'medicinal',
      'winey',
      'spicy',
      'malty',
      'nutty',
      'honey'
    ];

    var profile = {};

    if (whisky) {
      flavourKeys.forEach(function (key) {
        profile[key] = whisky[key]
      });
    }

    return (
      <div className="col-2-3 detail-container">
        <div className="content">
          <h3>{ whisky.name }</h3>
          <p>{ whisky.description }</p>
        </div>

        <div className="profile">
          <h4>Flavour Profile</h4>
          <FlavourGraph profile={ profile } />
        </div>
      </div>
    );
  }
});

module.exports = WhiskyDetail;