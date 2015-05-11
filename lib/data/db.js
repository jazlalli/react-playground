module.exports = exports = {};

exports.getAllWhiskies = getAll;
exports.getAllWhiskiesLike = getAllLike;
exports.getWhiskyRegions = getRegions;
exports.getAllWhiskiesInRegion = getAllInRegion;

var db = require('./query');

// private function to iron out deep object paths
var mapData = function mapdata (results) {
  var data = [];

  results[0].data.forEach(function (item) {
    if (item.row[1]) {
      for (var key in item.row[1]) {
        if (key !== 'name') {
          item.row[0][key] = item.row[1][key];
        }
      }
    }

    data.push(item.row[0]);
  });

  return data;
}

function getAll (callback) {
  var query = "MATCH (n:Whisky) RETURN n;"

  db(query, {}, function (err, res) {
    if (err) {
      return callback(err);
    }

    callback(null, mapData(res.results));
  });
}

function getAllLike (whisky, callback) {
  var query = [
    "MATCH (n:Whisky { name: {whisky} })-[:HAS_FLAVOURS]->(flavour:Flavour)<-[:HAS_FLAVOURS]-(whisky:Whisky)",
    "RETURN whisky, flavour;"
  ].join('\n');

  var params = {whisky: whisky};

  db(query, params, function (err, res) {
    if (err) {
      return callback(err);
    }

    console.log('>>>>', res);
    callback(null, mapData(res.results));
  });
}

function getRegions (callback) {
  var query = "MATCH (n:`Region`) RETURN n.name;";

  db(query, {}, function (err, res) {
    if (err) {
      return callback(err);
    }

    callback(null, mapData(res.results));
  });
}

function getAllInRegion (region, callback) {
  var query = "MATCH (:Region{name: {region} })<-[:LOCATED_IN]-()<-[:PRODUCED_IN]-(whisky:Whisky) RETURN distinct(whisky);";
  var params = {region: region};

  db(query, params, function (err, res) {
    if (err) {
      return callback(err);
    }

    callback(null, mapData(res.results));
  });
}