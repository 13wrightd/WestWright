'use strict';

const path = require('path');
const express = require('express');
const app = express();

var http = require('http').Server(app);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------ Config
var config = require('./config.js');

// ------------------------------------ Mongoose
var mongoose = require('mongoose');

mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error: '));
db.once('open', function(){
    console.log('Database connected.');
});

// ------------------------------------ Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// ------------------------------------ Bootstrap
var server = http.listen(app.get('port') , function () {
    console.log("Express server listening on port %d ", app.get('port'));
});
