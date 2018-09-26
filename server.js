const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static('public_static'));

app.get('/getAccounts', (req, res) => {
  console.log("**** GET /getAccounts ****");
  truffle_connect.start(function (answer) {
    res.send(answer);
  })
});


app.post('/getDeclaration', (req, res) => {
  console.log("*** getDeclaration - server.js ****");
  console.log(req.body);

  let addressPerCon = req.body.addressPerCon;

  truffle_connect.getDeclaration(addressPerCon, (getDeclaration) => {
     
  res.send(getDeclaration); 
  });
});

app.post('/setDeclaration', (req, res) => {
  console.log("**** setDeclaration - server.js ****");
  console.log(req.body);

  let addressPer = req.body.addressPer; 
  let rfc = req.body.rfc; 
  let declaracion = req.body.declaracion;
  let ano = req.body.ano; 
  let tipo = req.body.tipo; 
  let hashDoc = req.body.hashDoc; 
  
  truffle_connect.setDeclaration(addressPer, rfc, declaracion, ano, tipo, hashDoc, (getDeclaration) => {
    res.send(getDeclaration);
  });
});




app.listen(port, () => {

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8544"));

  console.log("Express Listening at http://localhost:" + port);

});
