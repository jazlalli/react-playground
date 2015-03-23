var React = require('react'),
		Router = require('react-router'),
		routes = require('../components/Routes.js');

var routeHandler = function routeHandler(req, res, next) {
	Router.run(routes, req.path, function (Handler, state) {
		res.send(React.renderToString(<Handler />, null));
	});
}

module.exports = function (router) {
	router.route('/*').get(routeHandler);
}