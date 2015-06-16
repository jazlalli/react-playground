var db = require('../data/db');

exports.getAll = function getAll(callback) {
  db.getWhiskyRegions(function (err, regions) {
    if (err) {
      return callback(err);
    }

    return callback(null, {data: regions});
  });
}