var db = require('../data/db');

exports.getAll = function getAll(callback) {
  db.getAllWhiskies(function (err, result) {
    if (err) {
      return callback(err);
    }

    return callback(null, {data: result});
  });
}

exports.get = function get(whisky, callback) {
  db.getWhisky(whisky, function (err, result) {
    if (err) {
      return callback(err);
    }

    return callback(null, {data: result});
  });
}

exports.like = function like(whisky, callback) {
  db.getAllWhiskiesLike(whisky, function (err, result) {
    if (err) {
      return callback(err);
    }

    return callback(null, {data: result});
  });
}

exports.inRegion = function inRegion(region, callback) {
  db.getAllWhiskiesInRegion(region, function (err, result) {
    if (err)
      return callback(err);

    return callback(null, {data: result});
  });
};