var mongoose = require('mongoose');

// it's a constructor! capitalize it
var ChairSchema = new mongoose.Schema({
  model: String,
  type: String
});

// export it! Good to make singular
module.exports = mongoose.model('Chair', ChairSchema);