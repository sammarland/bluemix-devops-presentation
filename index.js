var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

// Disable the powered by header to stop specific attacks against Express
app.disable('x-powered-by');

app.use(express.static(__dirname + '/'));


app.use(bodyParser());       // to support JSON-encoded bodies

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
