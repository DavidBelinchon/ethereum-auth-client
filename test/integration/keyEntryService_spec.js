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

const EthereumRegistrationService = require('../../index.js'),
	  staticVariables = require("../staticVariables.js");

const ethereumRegistrationService = new EthereumRegistrationService(staticVariables.ETHEREUM_HOST);

 const Q = require('q'),
	   contractEventListener = require('../../src/services/contractEventListener.js'),
       mapperService = require('../../src/services/mapperService.js'),
       keyEntryService = require('../../src/services/keyEntryService.js'),
       accountService = require('../../src/services/accountService.js');

 describe("Integration tests (KeyEntryService, ContractEventListener)", function () {
     it(" - should be initialised properly (register) and then set (change) authentication key for keyEntry", function () {
         var testFinished = false;

         var myAccount = accountService.getMyAccount();

         mapperService.deployContract().then(function(address){
            mapperService.register(staticVariables.SAMPLE_TEST_GETH_ADDRESS).then(function(address){
               var keyEntrySingleContractInfo = keyEntryService.createContractInfo(address);
               expect(keyEntrySingleContractInfo.getOwner()).toEqual(myAccount);
               expect(keyEntrySingleContractInfo.getAuthenticationKey()).toEqual(staticVariables.SAMPLE_TEST_GETH_ADDRESS);
               expect(address).toMatch(staticVariables.ETHEREUM_ADDRESS_FORMAT);
               expect(mapperService.getKeyEntry(myAccount)).toEqual(address);
               keyEntrySingleContractInfo.setAuthenticationKey(staticVariables.SAMPLE_TEST_GETH_CHANGED_ADDRESS);
               setTimeout(function (){
                   expect(keyEntrySingleContractInfo.getAuthenticationKey()).toEqual(staticVariables.SAMPLE_TEST_GETH_CHANGED_ADDRESS);
                   testFinished = true;
               }, 5000);
            })
            .fail(function(error){
                console.log(error);
            });
         });
         waitsFor(function() {
          return testFinished;
        }, "The test should finish", 20000);
        setTimeout(function functionName() {
            contractEventListener.unregisterListeners();
        },25000);
     });
 });
