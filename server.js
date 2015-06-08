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

var apiRouter = express.Router();
require('./routes/apiRoutes')(apiRouter);
app.use('/api', apiRouter);

var appRouter = express.Router();
require('./routes/appRoutes')(appRouter);
app.use(appRouter);

module.exports = app;
