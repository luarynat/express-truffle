const contract = require('truffle-contract');

const declaration_artifact = require('../build/contracts/Declaration.json');
var Declaration = contract(declaration_artifact);

module.exports = {
  start: function(callback) {
    var self = this;

    // Bootstrap the Declaration abstraction for Use.
    Declaration.setProvider(self.web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    self.web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        console.log("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      self.account = self.accounts[2];

      callback(self.accounts);
    });
  }, 

  getDeclaration: function(addressPerCon, callback) {
    var self = this;
    Declaration.setProvider(self.web3.currentProvider);

    console.log('** app.js ***: '+addressPerCon);
    var decla;
    Declaration.deployed().then(function(instance) {
      decla = instance;
      return decla.getDeclaration.call(addressPerCon).then(function(v) {
        console.log(v);
        callback(v);
      });
    }).catch(function(e) {
        console.log(e);
        callback("Error 404");
    });
  },

    

  setDeclaration: function(addressPer, rfc, declaracion, ano, tipo, hashDoc, callback) {
    var self = this; 
    Declaration.setProvider(self.web3.currentProvider);
    console.log('** app.js **',addressPer, rfc, declaracion, ano, tipo, hashDoc);
    var decla;
    Declaration.deployed().then(function(instance) {
      decla = instance;
      return decla.setDeclaration(addressPer, rfc, declaracion, ano, tipo, hashDoc, {from: self.web3.eth.accounts[0], gas: 4000000});
    }).then(function() {
        self.getDeclaration(addressPer, function (answer) {
        callback(answer);
      });
    }).catch(function(e) {
      console.log(e);
      callback("ERROR 404");
    });
  }
}
