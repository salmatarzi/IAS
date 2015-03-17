var express = require('express');
var app = express();
var usersRoute = require('./routes/users');
var publishersRoute = require('./routes/publishers');
var app = express();
var adRequest = require('./routes/adRequest');

app.use('/adRequest',adRequest);
app.use('/users', usersRoute);
app.use('/publishers', publishersRoute);

module.exports = app;
