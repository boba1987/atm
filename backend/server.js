const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const execPayment = require('../src/utils/payment');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, function () {
  console.log('App listening on port 4000!');
});

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/* Routing */
app
  .get('/payout', function(req, res){
    res.status(200).send('Hello');
  });
