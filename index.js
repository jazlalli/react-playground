var PORT = process.env.PORT || 4444;
var server = require('./server');

server.listen(PORT, function () {
	console.log('server runnining on port', PORT);
})