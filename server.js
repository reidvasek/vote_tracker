'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));//makes files in our public directory available from the root of the directory

app.get('/secret', function(request, response) {
  response.status(200).send('<h1>Hello Stranger!</h1> <p> You have stumbled upon a secret file in the food game!</p>');
});



app.get('/*', function(req, res) {
  res.status(404).send('<h1>Error 404: could not find page</h1>');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server running');
});