/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  getInitialState: function () {
    return {server: true};
  },
  componentDidMount: function () {
    this.setState({server: false});
  },
  render: function () {
    return (
      <header>
        <h1>{this.state.server ? 'This is the server rendering' : 'Now the app has fully loaded'}</h1>
        <ul>
          <li><Link to="whisky">Whiskies</Link></li>
          <li><Link to="map">Map</Link></li>
        </ul>
      </header>
    );
  }
});

module.exports = Header;
