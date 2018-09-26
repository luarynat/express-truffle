var Declaration = artifacts.require("./Declaration.sol"); 

module.exports = function(deployer) {
  deployer.deploy(Declaration,{from: web3.eth.accounts[0], gas: 4000000});
};
