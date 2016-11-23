/** 
* The MIT License (MIT) 
*  
* Copyright (c) 2016 Auth0, Inc. <support@auth0.com> (http://auth0.com) 
*  
* Permission is hereby granted, free of charge, to any person obtaining a copy 
* of this software and associated documentation files (the "Software"), to deal 
* in the Software without restriction, including without limitation the rights 
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
* copies of the Software, and to permit persons to whom the Software is 
* furnished to do so, subject to the following conditions: 
*  
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software. 
*  
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
* SOFTWARE. 
*/
'use strict';

const mapperService = require('./src/services/mapperService.js'),
	  keyEntryService = require('./src/services/keyEntryService.js'),
	  ethereumAccountService = require('./src/services/accountService.js'),
	  ethereumConnectorService = require('./src/services/ethereumConnectorService.js');

module.exports = RegistryService;

function RegistryService(ethereumUrl) {
	ethereumConnectorService.setEthereumHost(ethereumUrl);
}

/**
 * Creates a Smart Contract called KeyEntry in which the owner and the authenticationKey are stored.
 *
 * @param {authenticationKey} Ethereum's address.
 * @return {promise} This promise (if invoked) returns new address to KeyEntry.
 */
RegistryService.prototype.register = function register(authenticationKey){
	return mapperService.register(authenticationKey);
};
 
/**
 * Gets authenticationKey from key entry.
 *
 * @return {authenticationKey}
 */
RegistryService.prototype.getAuthenticationKey =  function getAuthenticationKey(address){
	return keyEntryService.createContractInfo(mapperService.getKeyEntry(address)).getAuthenticationKey();
};

/**
 * deploy - sends the contract deploying transaction into Ethereum
 *
 * @return {promise} This promise (if invoked) returns address to deployed contract.
 */
RegistryService.prototype.deploy = function deploy(){
	return mapperService.deployContract();
};
/**
 * getMyAccount - returns the account used by the geth node. Returns only the first
 * account as the architecture assumes only one geth account per node.
 *
 * @return String Ethereum account address
 */
RegistryService.prototype.getAccount = function getAccount(){
	return ethereumAccountService.getMyAccount();
};
/**
 * getContractAbi - returns account's ABI (smart contract's particular API) used by the geth node.
 * @return Array of objects - defining contract's ABI
 */
RegistryService.prototype.getContractAbi = function getContractAbi(){
	return mapperService.getContractAbi();
};