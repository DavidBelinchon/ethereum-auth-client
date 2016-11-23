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

const ethereumRegistrationService = new EthereumRegistrationService(staticVariables.ETHEREUM_HOST),
	  contractInfoFactory = require('../../src/factories/contractInfoFactory.js'),
	  CONTRACT_ABI = [],
      COMPILED_CONTRACT = '6060604052600c8060106000396000f360606040526008565b600256';

const contractInfo = contractInfoFactory.createContractInfo(CONTRACT_ABI, COMPILED_CONTRACT);

describe("Integration tests (ContractInfoFactory)", function () {
    it(" - should get contract", function () {
        expect(contractInfo.getContract()).not.toBeNull();
    });
    it(" - should get contractAbi", function () {
        expect(contractInfo.getContractAbi()).not.toBeNull();
    });
    it(" - should get compiled contract", function () {
        expect(contractInfo.getCompiledContract()).not.toBeNull();
    });
    it(" - should throw an exception when getting uploaded contract with no address set", function () {
        expect(function () {
            contractInfo.getUploadedContract();
        }).toThrow("Contract address was not defined!");
    });
    it(" - should set contract adress", function () {
        expect(contractInfo.setContractAddress()).not.toBeNull();
    });
    it(" - should get contract adress", function () {
        expect(contractInfo.getContractAddress()).not.toBeNull();
    });
});