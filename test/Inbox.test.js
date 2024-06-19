const ganache = require('ganache');
const { Web3 } = require('web3'); // pay attention to capital and lowercase letters!
const assert = require("assert"); 

//make a client connecting to the local eth network
const web3 = new Web3(ganache.provider());


it('can run', ()=>{
    assert.equal(2, 2)
})