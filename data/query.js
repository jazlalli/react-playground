var r = require('request');
var connection = 'http://localhost:7474/db/data/transaction/commit';

function query (query, params, cb) {
  r.post({
    uri: connection,
    json:{
      statements:[
        {statement: query, parameters: params}
      ]
    }
  },
  function (err, res) {
    if (err) {
      return cb(err);
    }

    return cb(null, res.body);
  });
}

module.exports = query;