var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public')); //dir for static files

/* for all routes */
app.use('/', routes);

/*Setup instance of app*/
var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port); //provides url to where the app is running
});
