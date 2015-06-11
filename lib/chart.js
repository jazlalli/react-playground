var doc = require('jsdom').jsdom(),
    globals = {};

// Stash old globals.
if ('Chart' in global) globals.Chart = global.Chart;
if ('window' in global) globals.window = global.window;
if ('document' in global) globals.document = global.document;

global.window = doc.parentWindow;
global.document = doc;

module.exports = require('react-chartjs-commonjs');

// Restore old globals.
if ('Chart' in globals) global.Chart = globals.Chart; else delete global.Chart;
if ('window' in globals) global.window = globals.window; else delete global.window;
if ('document' in globals) global.document = globals.document; else delete global.document;