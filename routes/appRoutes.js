var React = require('react'),
    Router = require('react-router'),
    routes = require('../components/Routes.jsx'),
    whiskyController = require('../controllers/whisky'),
    whiskyStore = require('../stores/whiskyStore'),
    inject = require('../client/inject');

var routeHandler = function routeHandler(req, res, next) {

  whiskyController.getAll(function (err, result) {
    whiskyStore._whiskies = result.data;

    Router.run(routes, req.path, function (Handler, state) {
      var html = React.renderToString(<Handler />, null);

      inject(html, JSON.stringify(result.data), function (err, response) {
        if (err) {
          return res.send({status: 500, message: err.message});
        }

        res.send(response);
      });
    });
  });
}

module.exports = function (router) {
  router.route('/*').get(routeHandler);
}