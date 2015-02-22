var Twitter = require('twitter');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var GEOCODING_URL = "https://maps.googleapis.com/maps/api/geocode/json";

var STATUS_OK = 200;

exports.update = function(callback) {
	var client = new Twitter({
		consumer_key: "RXct5entBp0vg4tghsUaLOBui",
		consumer_secret: "NYw7Z4GoEL7K0iu4sWwhcqthfXfSfahPKswt25BtGfuKePkrkH",
		access_token_key: "2724582716-GHT9ggSnmv3OxmwgiPkACImWdkiJBZruQvBySmd",
		access_token_secret: "uW2T3lQsrmkWhmBvPAxQx6UxtvuzZ5dv52PGYqaUlB59o"
	});

	client.stream('statuses/filter', {track: 'Stanford'}, function(stream) {
		stream.on('data', function(tweet) {
			if(tweet.coordinates) {
				console.log(tweet.text);
				console.log(tweet.user.location);
				console.log(tweet.coordinates);
			}
			else {
			    var request = new XMLHttpRequest();
			    request.addEventListener('load', function() {
			    	//console.log(request.responseText);
					if(request.status === STATUS_OK) {
						var results = JSON.parse(request.responseText).results;
						if(results.length > 0) {
							var LatLng = results[0].geometry.location;
							console.log(tweet.text);
							console.log(tweet.user.location);
							console.log(LatLng);
						}
						// var map = new google.maps.Map($map[0],
						//     mapOptions);
						// var marker = new google.maps.Marker({
						// 	position: LatLng,
						// 	map: map,
						// 	title: entryData.name
						// });
					}
			        //else 
			        	//console.log(request.responseText);
			    });
			    var args =  "?address=" + encodeURI(tweet.user.location);
			    //console.log(args);
			    request.open('GET', GEOCODING_URL + args, true);
			    request.send();
			}
		});

		stream.on('error', function(error) {
			callback(error);
		});
	});
};
