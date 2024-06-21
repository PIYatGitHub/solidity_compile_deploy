# Solidity contracts builder
This project will provide a tool to build, test and deploy a contract (in the sample case inbox.sol) to a test network. 

# Project structure
We have a simple node project with a few folders and files as follows: 

1. `/contracts` - holds all the contracts we have (in this case `inbox.sol`)
2. `/test` - holds the full on test suite for all of our contracts. 
3. `deploy.js` - a way to deploy the code we just wrote. 
4. `compile.js` - a way to compile the code we just wrote. 

# Env setup
In order to get this working, you will need to make an `.env` file, containing a few variables named and described as below: 
1. `MNEUMONIC`. This is the mneumonic to unlock your metamask acocunt. 

__IMPORTANT__ If this account contains real ether, DO NOT use it and remove the mneumonic immediately. 

2. `INFURA_API_KEY` - the API key to the test network you got from Infura. Looks like gibberish, probably is. 

3.
