var fs = require('fs');
var response = '';

module.exports = function (contentString, dataString, callback) {

  fs.readFile(__dirname + '/app.html', function (err, html) {
    if (err) {
      return callback(err);
    }

    response = html.toString();
    response = response.replace(/#content/ig, contentString);
    response = response.replace(/#data/ig, dataString);

    callback(null, response);
  });
};