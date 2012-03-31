var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var puzzleConfig = new Schema({
    'puzzleSize': {type: Number, required: true},
    'clueArray': {type: [Number], required: true}
});
var puzzleConfigModel = mongoose.model('puzzleConfig', puzzleConfig);

exports.configRead = function(req, res){
  return puzzleConfigModel.find(function (err, configs) {
      if (!err) {
          return res.send(configs);
      } else {
          return console.log(err);
      }
  })
};
exports.configCreate = function(req, res){
  var config = new puzzleConfigModel({
      'puzzleSize': req.body.puzzleSize,
      'clueArray': req.body.clueArray
  });
  console.log('POST:');
  console.log(req.body);
  config.save(function (err) {
      if (!err) {
          return console.log('created config');
      } else {
          return console.log(err);
      }
  })
  return res.send(config);
};
exports.configUpdate = function(req, res){
  res.render('poop.jade', { title: 'POOP' })
};
exports.configDelete = function(req, res){
  res.render('poop.jade', { title: 'POOP' })
};
