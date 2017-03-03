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

const log = require('../util/logger.js'),
      mapperContractInfoService = require('./mapperContractInfoService.js'),
      mapperContractUploadService = require('./mapperContractUploadService.js'),
      accountService = require('./accountService.js'),
      contractEventListener = require('./contractEventListener.js'),
      Q = require('q');

module.exports = (function initialize() {
  return {

    /**
     * get - retrieves the keyEntries value from the contract
     *
     * @return Number keyEntries value
     */
    getKeyEntry : function getKeyEntry(address) {
      const uploadedContract = mapperContractInfoService.getUploadedContract();
      return uploadedContract.keyEntries.call(address);
    },
    /**
     * register - executes an keyEntries incrementing Ethereum transaction
     *
     * @return undefined
     */
    register : function register(ethAuthKey) {
      var deferred = Q.defer();
      const uploadedContract = mapperContractInfoService.getUploadedContract();
      const myAccountAddress = accountService.getMyAccount();
      contractEventListener.registerCallback(deferred, myAccountAddress);
      uploadedContract.register.sendTransaction(ethAuthKey, {
        from: myAccountAddress,
        gas: 4700000}, function transactionCallback(err, address) {
            if (err) {
              log.error("Error occured for transaction:" + ethAuthKey + " " + err)
            } else {
              log.info("Starting registration transaction:" + ethAuthKey)
            }
      });
      return deferred.promise;
    },
	//TODO docs
    deployContract : function deployContract(address){
        var deferred = Q.defer();
        mapperContractUploadService.deployContract(function(address){
            return deferred.resolve(address);
        },address);
        return deferred.promise;
    },
	//TODO docs
    getContractAbi : function getContractAbi(){
        return mapperContractInfoService.getContractAbi();
    }
  }
})();
