var React = require('react'),
    Router = require('react-router'),
    routes = require('../components/Routes.jsx'),
    whiskyController = require('../controllers/whisky'),
    whiskyStore = require('../stores/whiskyStore'),
    regionController = require('../controllers/region'),
    regionStore = require('../stores/regionStore'),
    inject = require('../client/inject');

var fetchData = function fetchData(callback) {
  var data = {};

  whiskyController.getAll(function (err, result) {
    console.log('setting whiskies in store');
    whiskyStore._whiskies = result.data;
    data.whiskies = result.data;

    regionController.getAll(function (err, result) {
      console.log('setting regions in store');
      regionStore._regions = result.data;
      data.regions = result.data;

      callback(null, data);
    });
  });
}

var routeHandler = function routeHandler(req, res, next) {
  Router.run(routes, req.path, function (Handler, state) {

    fetchData(function (err, data) {
      if (err) {
        return res.send(err);
      }

      var html = React.renderToString(<Handler />, null);
      html = inject(html, data);
      res.send(html);
    });
  });
}

module.exports = function (router) {
  router.route('/*').get(routeHandler);
}