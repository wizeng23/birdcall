// render a 404 response
exports.render404 = function(request, response) {
  response.status(404);
  response.render('not-found.html');
};

// no operation placeholder for empty callbacks
exports.noOperation = function() {};
