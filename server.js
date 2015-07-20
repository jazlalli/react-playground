require('node-jsx').install();

var express = require('express'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/public'));
app.use(morgan('tiny'));

var apiRouter = require('./routes/apiRoutes')(express.Router());
app.use('/api', apiRouter);

var appRouter = require('./routes/appRoutes')(express.Router());
app.use('/', appRouter);

module.exports = app;
