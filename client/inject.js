var fs = require('fs');
var response = '';

module.exports = function (contentString, path, dataString, callback) {

  fs.readFile(__dirname + '/app.html', function (err, html) {
    if (err) {
      return callback(err);
    }

    response = html.toString();
    response = response.replace(/#content/ig, contentString);

    if (path === '/whisky') {
      response = response.replace(/\'#whiskies\'/ig, dataString);
    }

    if (path === '/region') {
      response = response.replace(/\'#regions\'/ig, dataString);
    }

    callback(null, response);
  });
};