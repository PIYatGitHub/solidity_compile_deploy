const ganache = require('ganache');
const { Web3, Web3Eth } = require('web3'); // pay attention to capital and lowercase letters!
const assert = require("assert"); 
const compiled = require("../compile");

//make a client connecting to the local eth network
const web3 = new Web3(ganache.provider());

const INITIAL_STRING = 'A distant Roman city';
const MODIFIED_STRING = 'City is Capua.';

let selectedAccount = ''
let inbox; 
beforeEach(async()=>{
    //grab a list of accounts
    const accounts = await web3.eth.getAccounts();
    selectedAccount = accounts.at(0);

    //deploy the contract to one of them 
    inbox = await new web3.eth.Contract(compiled.abi)
        .deploy({ data: compiled.evm.bytecode.object, arguments: [INITIAL_STRING] })
        .send({ from: accounts[0], gas: '1000000' });
})

it('can get an account', ()=>{
    assert.ok(selectedAccount);
})


it('can depploy a new inbox instance', async()=>{
    assert.notEqual(inbox, null);
    assert.ok(inbox.options.address);
})

it('has a set default message', async()=>{
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
})

it('can alter the default message', async()=>{
    await inbox.methods.setMessage(MODIFIED_STRING).send({from: selectedAccount});
    const message = await inbox.methods.message().call();
    assert.equal(message, MODIFIED_STRING);
})