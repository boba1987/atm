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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader('Access-Control-Request-Headers', 'application/json');
  next();
});

/* Routing */
app
  .post('/payout', function(req, res){
    const payment = execPayment.execPayment(req.body.notes, req.body.amount);

    res.send(JSON.stringify(payment));
  });
