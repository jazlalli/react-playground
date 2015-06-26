var fs = require('fs');
var response = '';

var html = fs.readFileSync(__dirname + '/app.html', {encoding: 'utf8'});

module.exports = function (content, data) {
  var keyRegex;

  html = html.replace(/#content/ig, content);

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      keyRegex = new RegExp('\'#' + key + '\'', 'ig');
      html = html.replace(keyRegex, JSON.stringify(data[key]));
    }
  }

  return html;
};
