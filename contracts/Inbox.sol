// SPDX-License-Identifier: UNLICENSED 
pragma solidity 0.8.19;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Inbox {
    string public message;

    function inbox(string memory initialMessage) public {
        message = initialMessage;
    }

    function setMessate(string memory newMessage) public {
        message = newMessage;
    }
}