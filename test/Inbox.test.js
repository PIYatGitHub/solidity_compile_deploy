const ganache = require('ganache');
const { Web3, Web3Eth } = require('web3'); // pay attention to capital and lowercase letters!
const assert = require("assert"); 
const compiled = require("../compile");

//make a client connecting to the local eth network
const web3 = new Web3(ganache.provider());

let selectedAccount = ''
let inbox; 
beforeEach(async()=>{
    //grab a list of accounts
    const accounts = await web3.eth.getAccounts();
    selectedAccount = accounts.at(0);

    //deploy the contract to one of them 
    // inbox = await new web3.eth.Contract(JSON.parse(compiled.abi))
    //     .deploy({data: compiled.evm.bytecode, arguments: ["Hello World!"]})
    //     .send({from: selectedAccount, gas: '1000000'})

    inbox = new web3.eth.Contract(compiled.abi, selectedAccount);

   await inbox.methods.setMessage('New Message').send({ from: selectedAccount });
})

it('can get an account', ()=>{
    console.log("we do have a test (unlocked) account: ", selectedAccount);
    assert.notEqual(selectedAccount, '');
})


it.only('can depploy a new inbox instance and set its message', async()=>{
    assert.notEqual(inbox, null);

    const message = await inbox.methods.message().send({ from: selectedAccount });
    console.log('MESSAGE:', message);

})