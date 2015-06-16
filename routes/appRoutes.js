var React = require('react'),
    Router = require('react-router'),
    routes = require('../components/Routes.jsx'),

    whiskyController = require('../controllers/whisky'),
    whiskyStore = require('../stores/whiskyStore'),
    regionController = require('../controllers/region'),
    regionStore = require('../stores/regionStore'),

    inject = require('../client/inject');


var whiskyRouteHandler = function (req, res, next) {
  whiskyController.getAll(function (err, result) {
    whiskyStore._whiskies = result.data;

    Router.run(routes, req.path, function (Handler, state) {
      var html = React.renderToString(<Handler />, null);

      inject(html, '/whisky', JSON.stringify(result.data), function (err, response) {
        if (err) {
          return res.send({status: 500, message: err.message});
        }

        res.send(response);
      });
    });
  });
};

var regionRouteHandler = function (req, res, next) {
  regionController.getAll(function (err, result) {
    regionStore._regions = result.data;

    Router.run(routes, req.path, function (Handler, state) {
      var html = React.renderToString(<Handler />, null);

      inject(html, '/region', JSON.stringify(result.data), function (err, response) {
        if (err) {
          return res.send({status: 500, message: err.message});
        }

        res.send(response);
      });
    });
  });
};


var routeHandler = function routeHandler(req, res, next) {
  // TODO: maybe try to use req.path and req.method to create appropriate action

  console.log('im here', req.path);

  switch (req.path) {
    case '/whisky':
      whiskyRouteHandler(req, res, next);
      break;
    case '/region':
      regionRouteHandler(req, res, next);
      break;
    default:
      Router.run(routes, req.path, function (Handler, state) {
        var html = React.renderToString(<Handler />, null);

        inject(html, '', '', function (err, response) {
          if (err) {
            return res.send({status: 500, message: err.message});
          }

          res.send(response);
        });
      });
  }
}

module.exports = function (router) {
  router.route('/*').get(routeHandler);
}