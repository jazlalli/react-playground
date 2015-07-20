var React = require('react'),
    Router = require('react-router'),
    async = require('async'),
    routes = require('../components/Routes.jsx'),
    whiskyController = require('../controllers/whisky'),
    whiskyStore = require('../stores/whiskyStore'),
    regionController = require('../controllers/region'),
    regionStore = require('../stores/regionStore'),
    inject = require('../client/inject');

var routeHandler = function routeHandler(req, res, next) {
  Router.run(routes, req.path, function (Handler, state) {
    async.parallel([
      function (cb) {
        whiskyController.getAll(function (err, result) {
          if (err) return cb(err);

          whiskyStore._whiskies = result.data;
          return cb(null, result.data);
        });
      },

      function (cb) {
        regionController.getAll(function (err, result) {
          if (err) return cb(err);

          regionStore._regions = result.data;
          return cb(null, result.data);
        });
      }
    ], function (err, result) {
      if (err) {
        return res.send(err);
      }

      var content = React.renderToString(<Handler />, null);
      var data = {
        whiskies: result[0],
        regions: result[1]
      }

      var html = inject(content, data);
      res.end(html);
    });
  });

};

module.exports = function (router) {
  router.route('/*').get(routeHandler);
  return router;
}