var express = require("express");
var app = express();
var mongoose = require('mongoose');
var Chair = require('./models/chair'); // singular!
// body-parser is middle-ware

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
// post > body > x-www-form-urlencoded
app.post('/chairs', function(req, res, next) {
  var chair = new Chair();
  chair.type = req.body.type;
  chair.model = req.body.model;

  // asyncronous!
  // to connect and check in postman, go to localhost:5000/chairs
  // 
  chair.save(function(err, chairReturned){
    if (err) { console.log(err); 
      next(err); // passes the err back to the top-level guy
    } else { // keep the else, otherwise weird errors will build up!
      res.json('chair put in db ' + chairReturned.model);
    }
  });
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