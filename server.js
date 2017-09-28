var express = require("express");
var app = express();
var mongoose = require('mongoose');
var Chair = require('./models/chair'); // singular!
var bodyParser = require('body-parser'); // wire -- work with info from the client's app (browser) and lets you do stuff with it
// express has a system that we can't edit, but we're modifying things using post and get--we can insert things between our bodyparser and our boss. Next passes things to bodyparser (errors), when info comes down from the top level, gets translated by the body parser. It turns input into www-urlencode-form-data-x stuff
// body-parser is middle-ware

// specify that you'll use the bodyParser

app.use(express.static('public'));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({
  exended: true
}));

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
      //console.log(chairReturned);
      res.json('chair put in db ' + chairReturned.model);
    }
  });
});
// when you design an API, it might be worth learning error handing (how it works)
// this is a mongodb query using mongoose
app.get('/chairs', function(req, res, next) {
  Chair.find(function(err, chairs) {
    if (err) {
      console.log(err);
    } else {
      res.json(chairs);
    }
  });
});
app.put('/chairs', function(req, res, next) {
  Chair.findById(req.body.id, function(err, chair) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      chair.type = req.body.type;
      chair.model = req.body.model;
      chair.save(function(err, chairReturned){
        if (err) { console.log(err); 
          next(err); 
        } else { 
          res.json('chair updated in db ' + chairReturned.model);
        }
      }); 
    }
  });
});
app.delete('/chairs', function(req, res, next) {
// find using id then mongoose id
// mongoose allows you to use mongodb schemas ORM object-relationship management, layer that helps us manage the objects
// Chair.findOne({_id: req.body.id}, function(){ });
  Chair.findByIdAndRemove(req.body.id, function(err, chair) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.json("successfully deleted a chair: " + chair.model);
    }
  });

});

app.listen(5000, function () {
  console.log("Listening on 5000");
});