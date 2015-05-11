var db = require('../data/db');

exports.all = function (req, res, next) {
  db.getWhiskyRegions(function (err, regions) {
    if (err)
      return res.end({status: 500, message: err.message});

    res.json({data: regions});
  });
}