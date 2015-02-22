(function(window, document, undefined) {
  var UpdateModel = {};

  var UPDATE_URL = '/update';
  var STATUS_OK = 200;

  /**
   * Loads API search results for a given query.
   *
   * Calls: callback(error, results)
   *  error -- the error that occurred or NULL if no error occurred
   *  results -- an array of search results
   */
  UpdateModel.update = function(query, callback) {

    console.log("UpdateModel");
    var request = new XMLHttpRequest();
    request.addEventListener('load', function() {
  		if(request.status === STATUS_OK) {
  			callback(null, JSON.parse(request.responseText));
  		}
      else 
      	callback(request.responseText);
    });
    //var args =  "?query=" + encodeURIComponent(query);
    request.open('GET', UPDATE_URL, true);
    request.send();
  };

  window.UpdateModel = UpdateModel;
})(this, this.document);
