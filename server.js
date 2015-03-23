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

var router = express.Router();
require('./routes/appRouter')(router);

app.use(router);

module.exports = app;
