(function(window, document, undefined) {
  
  var TweetView = {};

  /* Renders the newsfeed into the given $newsfeed element. */
  TweetView.render = function($tweets) {
    console.log("TweetView");
    UpdateModel.update("", function(){});
    
  };

  /* Given post information, renders a post element into $newsfeed. */
  TweetView.renderPost = function($tweets, tweet) {
    var $tweetTemplate = $('#tweet-template');
    var renderTweet = Handlebars.compile($tweetTemplate.html());
    var $tweet = $(renderTweet(tweet));
    $tweets.prepend($tweet);
  };


  window.TweetView = TweetView;
})(this, this.document);
