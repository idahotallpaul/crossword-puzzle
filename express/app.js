
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    puzzle = require('./routes/puzzle');

var app = module.exports = express.createServer();

//Connect to database
mongoose.connect('mongodb://localhost/puzzleDB');

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

// Routes

//API route
app.get('/api', function (req, res) {
    res.send('Api runing fine');
});
//Puzzle config routes
app.get('/puzzle', puzzle.configRead);
app.post('/puzzle', puzzle.configCreate);
app.put('/puzzle', puzzle.configUpdate);
app.del('/puzzle', puzzle.configDelete);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
