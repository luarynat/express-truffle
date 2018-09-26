# Express-Box
To Be Used as Truffle Box Creating API Endpoints for
Ethereum Blockchain.

We use personalised blockchain for Ethereum BlockChain
Development. This personalised blockchain is made in the
GanacheCLI.

The Smart Contract Written in solidity language
is deployed on this Ethereum Blockchain. Smart Contract is
Immutable hence, once deployed it can't be changed.

A truffle box to serve as the foundation of any Truffle and Express.js dApp.

This Box Uses NodeJS(Express JS) to provide API
endpoints to the Ethereum Blockchain smart contract so that this
smart contract can be used in Android Apps as well.

**Pre-Requisites**
1. [NodeJS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
2. [Yarn](https://stackoverflow.com/questions/42606941/install-yarn-ubuntu-16-04-linux-mint-18-1)
3. [GanacheCLI](https://github.com/trufflesuite/ganache-cli)
4. [Truffle](https://github.com/trufflesuite/truffle)

**Installation**
1. Install Truffle and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well!
```
npm install -g truffle
npm install -g ganache-cli
```

2. Download the box. This also takes care of installing the necessary dependencies.

```
truffle unbox arvindkalra/express-box

```
3. In one terminal window run the Launch GanacheCLI `ganache-cli -i 666`
  * To prevent creating a new network id everytime, we have set a default network key in the truffle config file.
  * To change that, simply go to the 'truffle.js' file and change the network_id from '666' to " * " and to Launch GanacheCLI `ganache-cli`.
4. Install all the node modules required by running:
```javascript
// install all the node modules using npm
npm install
```  
or if you  prefer yarn
```javascript
//install all the node modules using yarn
yarn install
```
5. Open another terminal window in the project repository and compile all the smart contract(which can be found in the '/contracts' folder).
```
truffle compile
```

6. You can see that a new `/build` folder has been created in the root directory which contains the compiled contracts.

7. Now these contracts need to be deployed on the Blockchain. For this,  
```
truffle migrate --network development
```
  * If you changed the network_id to " * " in Step 1, you can run `truffle migrate`
8. To run the Express server `yarn start` or `npm server.js`
9. In the browser window open `http://localhost:3000/`.

**Collaborators**
1. [ARVIND KALRA](https://github.com/arvindkalra)
2. [PRANAV SINGHAL](https://github.com/pranav-singhal)
