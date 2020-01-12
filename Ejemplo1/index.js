var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var pais = require('./routes/pais');
var provincia = require('./routes/provincia');

var mongoDB = 'mongodb://127.0.0.1:27017/test';


mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pais', pais);
app.use('/provincia', provincia);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(
	3000, () => 
	{
		console.log('Start');
	}
);

module.exports = app;