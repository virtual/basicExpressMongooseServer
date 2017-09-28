var express = require("express");
var app = express();
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/{put your database right here}');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('we have connected');
});

app.get("/", function(req, res) {
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});
