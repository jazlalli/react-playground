/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <nav>
        <ul>
          <li><Link to="whiskies">Whiskies</Link></li>
          <li><Link to="regions">Regions</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Header;
