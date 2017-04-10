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
	  ethereumConnectorService = require('./src/services/ethereumConnectorService.js'),
	  mapperContractInfoService = require('./src/services/mapperContractInfoService.js');

module.exports = RegistryService;

function RegistryService(ethereumUrl, contractAddress) {
	ethereumConnectorService.setEthereumHost(ethereumUrl);
	mapperContractInfoService.setContractAddress(contractAddress);
}
/**
 * Gets authenticationKey from key entry.
 *
 * @return {authenticationKey}
 */
RegistryService.prototype.getAuthenticationKey =  function getAuthenticationKewy(address){
	return mapperService.getKeyEntry(address);
};
/**
 * getContractAbi - returns account's ABI (smart contract's particular API) used by the geth node.
 * @return Array of objects - defining contract's ABI
 */
RegistryService.prototype.getContractAbi = function getContractAbi(){
	return mapperService.getContractAbi();
};
/**
 * registerEventListener - registers a callback function to listen to AddressMapped events
 */
RegistryService.prototype.registerEventListener = function registerEventListener(listener){
    return mapperService.watchAddressMappedEvent(listener);
};