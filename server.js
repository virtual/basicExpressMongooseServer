var express = require("express");
var app = express();
var mongoose = require('mongoose');
var Chair = require('./models/chair'); // singular!

mongoose.connect('mongodb://localhost/chairs');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('chairs db has connected');
});

app.get("/", function (req, res) {
  res.sendfile('index.html');
});

// app.post('/chairs');
// app.get('/chairs');
// app.put('/chairs');
// app.delete('/chairs');

// add callbacks to each
app.post('/chairs', function(req, res) {

});
app.get('/chairs', function(req, res) {

});
app.put('/chairs', function(req, res) {

});
app.delete('/chairs', function(req, res) {

});

app.listen(5000, function () {
  console.log("Listening on 5000");
});