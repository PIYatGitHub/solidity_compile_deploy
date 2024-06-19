const ganache = require('ganache');
const { Web3 } = require('web3'); // pay attention to capital and lowercase letters!
const assert = require("assert"); 

//make a client connecting to the local eth network
const web3 = new Web3(ganache.provider());

let selectedAccount = ''

beforeEach(async()=>{
    //grab a list of accounts
    const accounts = await web3.eth.getAccounts();
    selectedAccount = accounts.at(0);

    //deploy the contract to one of them 

})

it('can get an account', ()=>{
    console.log("we do have a test (unlocked) account: ", selectedAccount);
    assert.notEqual(selectedAccount, '');
})