var express = require('express');
var router = express.Router();
var app = express();
var twitter = require('../lib/twitter.js');

/* GET home page. */
app.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html');
});

app.get('/update', function(req, res, next) {
	console.log("/update");
	twitter.update(function(error) {
		if(error)
			throw error
	});
});

module.exports = router;
