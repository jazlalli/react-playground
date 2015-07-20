var fs = require('fs');
var response = '';

module.exports = function (content, data) {
  var html = fs.readFileSync(__dirname + '/app.html', {encoding: 'utf8'});
  var keyRegex;

  var renderedHtml = html.replace(/#content/ig, content);

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      keyRegex = new RegExp('\'#' + key + '\'', 'ig');
      renderedHtml = renderedHtml.replace(keyRegex, JSON.stringify(data[key]));
    }
  }

  return renderedHtml;
};
