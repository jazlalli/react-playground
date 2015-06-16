/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({

  render: function () {
    return (
      <div className="home-page">
        <div className="intro">
          <Link to="whiskies"><h1>drambustrs</h1></Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;
