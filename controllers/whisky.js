var db = require('../data/db');

// function randomFlavour() {
//   return Math.floor(Math.random() * 4);
// }

exports.getAll = function getAll(callback) {
  db.getAllWhiskies(function (err, result) {
    if (err) {
      return callback(err);
    }

    // result
    //   .sort(function (a, b) {
    //     if (a.name < b.name) return -1;
    //     else if (b.name < a.name) return 1;
    //     else return 0;
    //   })
    //   .forEach(function (item) {
    //     item.sweetness = randomFlavour();
    //     item.fruity = randomFlavour();
    //     item.floral = randomFlavour();
    //     item.body = randomFlavour();
    //     item.smokey = randomFlavour();
    //     item.tobacco = randomFlavour();
    //     item.medicinal = randomFlavour();
    //     item.winey = randomFlavour();
    //     item.spicey = randomFlavour();
    //     item.malty = randomFlavour();
    //     item.nutty = randomFlavour();
    //     item.honey = randomFlavour();
    //   });

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