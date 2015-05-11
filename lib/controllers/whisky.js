var db = require('../data/db');

exports.all = function all(req, res, next) {
  db.getAllWhiskies(function (err, whiskies) {
    if (err) {
      return res.end({status: 500, message: err.message});
    }

    res.json({data: whiskies});
  });
}

exports.like = function like(req, res, next) {
  var whisky = req.params.whisky;

  db.getAllWhiskiesLike(whisky, function (err, whiskies) {
    if (err) {
      return res.end({status: 500, message: err.message});
    }

    res.json({data: whiskies});
  });
}

exports.inRegion = function inRegion(req, res, next) {
  var region = req.params['region'];

  db.getAllWhiskiesInRegion(region, function (err, whiskies) {
    if (err)
      return res.end({status: 500, message: err.message});

    res.json({data: whiskies});
  });
};