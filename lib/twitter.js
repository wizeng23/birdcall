var Twitter = require('twitter');

var STATUS_OK = 200;

exports.update = function(callback) {
	var client = new Twitter({
	  consumer_key: "RXct5entBp0vg4tghsUaLOBui",
	  consumer_secret: "NYw7Z4GoEL7K0iu4sWwhcqthfXfSfahPKswt25BtGfuKePkrkH",
	  access_token_key: "2724582716-GHT9ggSnmv3OxmwgiPkACImWdkiJBZruQvBySmd",
	  access_token_secret: "uW2T3lQsrmkWhmBvPAxQx6UxtvuzZ5dv52PGYqaUlB59o"
	});

	client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
	  stream.on('data', function(tweet) {
	    console.log(tweet.text);
	  });
	 
	  stream.on('error', function(error) {
	    callback(error);
	  });
	});
};
