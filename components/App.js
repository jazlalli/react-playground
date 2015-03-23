/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./Header');

var App = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>React init</title>
          <link href="css/style.css" media="screen" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div>
            <Header />

            <RouteHandler/>
          </div>
        </body>
        <script src="js/bundle.js"></script>
      </html>
    );
  }
});

module.exports = App;
