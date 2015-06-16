var whisky = require('../controllers/whisky');
var region = require('../controllers/region');

module.exports = function (router) {
  router.route('/')
    .get(function (req, res, next) {
      // get all whiskies
      // get all whiskies by region
      // get all whiskies by flavour group

      res.json({data: []});
    });

  router.route('/whisky')
    .get(function (req, res, next) {
      whisky.getAll(function (err, result) {
        if (err) {
          return res.json({status: 500, message: err.message});
        }

        res.json(result);
      });
    });

  router.route('/whisky/:whisky')
    .get(function (req, res, next) {
      whisky.get(req.params.whisky, function (err, result) {
        if (err) {
          return res.json({status: 500, message: err.message});
        }

        res.json(result);
      });
    });

  router.route('/whisky/like/:whisky')
    .get(function (req, res, next) {
      whisky.like(req.params.whisky, function (err, result) {
        if (err) {
          return res.json({status: 500, message: err.message});
        }

        res.json(result);
      });
    });

  router.route('/region')
    .get(function (req, res, next) {
      region.getAll(function (err, result) {
        if (err) {
          return res.json({status: 500, message: err.message});
        }

        res.json(result);
      })
    });

  router.route('/whisky/in/:region')
    .get(function (req, res, next) {
      whisky.inRegion(req.params.region, function (err, result) {
        if (err) {
          return res.json({status: 500, message: err.message});
        }

        res.json(result);
      });
    });
};