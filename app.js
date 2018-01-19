'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var context = 'madera';

var app = module.exports = express();
app.use(bodyParser.json());
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('*' + context, express.static(__dirname + '/src'));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
    return next();
});

require('./server/server-main.js')(app);

var serverApp = app.listen(3000, function () {
    console.log('app listening at http://%s:%s/%s', 'localhost', serverApp.address().port, context);
});
