var utils = require('./lib/utils.js');
var ejs = require('ejs');

module.exports = function(app, express) {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options', { layout: false });
  app.engine('html', ejs.renderFile);

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());

  app.use(express.session({
    secret: 'qFDr)luP)pr4ILLBimSP&4E1EAfBw@a3io6sul0R',
    resave: true,
    saveUninitialized: true
  }));

  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
  app.use(utils.render404);
};
