pragma solidity ^0.4.2;

contract Mapper {
    
    event Registration(address owner, address keyEntryAddress);
    event Error(uint code, address owner);
    
    mapping (address => address) public keyEntries;
    mapping (address => bool) public keysInUse;
    
    modifier primaryKeyMustBeUnique {
        if(keyEntries[msg.sender] == 0) _; else {
            Error(0,msg.sender); //KeyEntry already specified for that account
            throw;
        }
    }
    
    modifier authenticationKeyMustBeUnique(address authenticationKey) {
        if(!keysInUse[authenticationKey]) _; else {
            Error(1,msg.sender); //Secondary address already in use
            throw;
        }
    }
    
    function register(address authenticationKey) primaryKeyMustBeUnique 
    authenticationKeyMustBeUnique(authenticationKey) {
        address keyEntry = address(new KeyEntry(authenticationKey,msg.sender));
        keyEntries[msg.sender] = keyEntry;
        keysInUse[authenticationKey] = true;
        Registration(msg.sender,keyEntry);
    }
    
    function changeAuthenticationKey(address newAuthenticationKey) 
    authenticationKeyMustBeUnique(newAuthenticationKey) {
        KeyEntry keyEntry = KeyEntry(keyEntries[msg.sender]);
        address oldAuthenticationKey = keyEntry.authenticationKey();
        keyEntry.setAuthenticationKey(newAuthenticationKey, msg.sender);
        keysInUse[oldAuthenticationKey] = false;
        keysInUse[newAuthenticationKey] = true;
    }
}

contract KeyEntry {
    
    address public creator;
    address public owner;
    address public authenticationKey;
    
    modifier onlyOwner(address _owner) {
        if(_owner == owner) _; else throw;
    }
    
    modifier onlyCreator() {
        if(msg.sender == creator) _; else throw;
    }
    
    function KeyEntry(address _authenticationKey, address _owner) {
        creator = msg.sender;
        owner = _owner;
        authenticationKey = _authenticationKey;
    }
    
    function setAuthenticationKey(address _authenticationKey, address _owner) onlyOwner(_owner) onlyCreator {
        authenticationKey = _authenticationKey;
    }
}