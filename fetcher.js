var STATUS_OK = 200;
var STATUS_CREATED = 201;

//DOES NOT WORK
function getSearch() {
	var query = "thanksobama";
	var until = "2015-1-27";
	var since = "2015-1-31";
	var endpoint = "https://api.twitter.com/1.1/search/tweets.json?q=obama";

	// var endpoint = "https://api.twitter.com/1.1/search/tweets.json?q=" + query +"&until=" + until + "&since=" + since;
	// var request = new XMLHttpRequest();
	//     request.addEventListener('load', function() {
	// 		if(request.status == STATUS_OK || request.status == STATUS_CREATED) {
	// 			console.log(request.responseText);
	//       		var tweets = JSON.parse(request.responseText);
	// 		}
	//         else 
	//         	console.log(request.responseText);
	//     });
	// request.open('GET', endpoint, true);
	// request.setRequestHeader('Accept', 'application/jsonp');
 // 	request.setRequestHeader('Authorization', 'oauth_token=' + oauthToken);
	// request.send();
	console.log("but does it blend?");

	$(document).ready(function () {
	    $.ajax({
	        type: 'GET',
	        dataType: 'jsonp',
	        crossDomain: 'true',
	        Authorization: 'OAuth oauth_consumer_key="Vm4RDt8DvD3R7hvTvJeW6G0h4", oauth_nonce="694f86af41704cffd2edce82ca8b8dd4", oauth_signature="KaSmfUSyUNk%2BhK0%2ByI2fDq4%2B0g4%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1424566184", oauth_token="247059273-KJOeDXPKt4TIxMLVokcZo5ufcwbulEMQavgQDRfJ", oauth_version="1.0"',
	        url: endpoint,
	        error: function (jqXHR, textStatus, errorThrown) {
	        	console.log("lolol");
            	console.log(jqXHR);
        	},
	        success: function (msg) {
	        	var tweets = JSON.parse(msg);
	        	console.log("hahaha");
	            console.log("yo cucumbers" + msg);
	        }
	    });
	});
	console.log("nope it don't");
}


//Takes a JSON object of tweets.  If the tweet has a legit location, add it to an array to be returned.
//The array's format is [[latitude, longitude, sentimentValue, tweetText],...]
//TODO: implement getting sentiment value.
function getTweetsData(tweets) {
	var tweetsData = [];
	for (var i = 0; i < tweets.statuses.length; i++) { //Loops through all the tweets
		var longitude = 0.0;
		var latitude = 0.0;
		//If this tweet was retweeted, this tries to set the coordinates to that of the original tweet.
		if (tweets.statuses[i].retweeted_count != 0 && tweets.statuses[i].retweeted_status.coordinates != null) {
			longitude = tweets.statuses[i].retweeted_status.coordinates.coordinates[0];
			latitude = tweets.statuses[i].retweeted_status.coordinates.coordinates[1];
		}
		//If the long/lat are still 0.0, this tries to set the coordinates to that of the tweet.
		if (tweets.statuses[i].coordinates != null && longitude == 0.0 && latitude == 0.0) {
			longitude = tweets.statuses[i].coordinates.coordinates[0];
			latitude = tweets.statuses[i].coordinates.coordinates[1];
		}
		//If the long/lat aren't 0, then add the tweet's data to the array.
		if (longitude != 0.0 && latitude != 0.0) {
			var sentimentValue = 0.5;
			var tweetText = tweets.statuses[i].text;
			var tweetVals = [latitude, longitude, sentimentValue, tweetText];
			tweetsData[tweetsData.length] = tweetsVals;
		}
	}
	return tweetsData;
}
