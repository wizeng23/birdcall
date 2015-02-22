(function(window, document, undefined) {
  var MainView = {};

  MainView.render = function($body) {
    // NewsfeedView.render($body.find('#newsfeed'));
    // SearchView.render($body.find('#search'));
    console.log("MainView");
    TweetView.render($body.find('#tweets'));
  };

  window.MainView = MainView;
})(this, this.document);
