// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {

  networks: {
  	 development: {
      host: 'localhost',
      port: 8544,
      network_id: '*' // Match any network id
    },
    rpcjson:{
    	host:'localhost',
    	port: 8544,
    	gas: 4700000
    }
  }
}
