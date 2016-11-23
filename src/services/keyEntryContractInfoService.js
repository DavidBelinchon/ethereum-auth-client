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

const contractInfoFactory = require('../factories/contractInfoFactory.js');

const CONTRACT_ABI = [{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_authenticationKey","type":"address"},{"name":"_owner","type":"address"}],"name":"setAuthenticationKey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"authenticationKey","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_authenticationKey","type":"address"},{"name":"_owner","type":"address"}],"type":"constructor"}];

const COMPILED_CONTRACT = '606060405260405160408061035f833981016040528080519060200190919080519060200190919050505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50506102a3806100bc6000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806302d05d3f1461005d5780638da5cb5b1461009b578063aa7cddfe146100d9578063c43dc766146100ff57610058565b610002565b346100025761006f600480505061013d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610002576100ad6004805050610163565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610002576100fd6004808035906020019091908035906020019091905050610189565b005b3461000257610111600480505061027d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561027257600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102675782600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b61026c565b610002565b5b610277565b610002565b5b505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156';

module.exports = (function initialize(){
    return{
        getContractAt : function getContractAt(address){
            var contractInfo = contractInfoFactory.createContractInfo(CONTRACT_ABI, COMPILED_CONTRACT);
            contractInfo.setContractAddress(address);
            return contractInfo;
        }
    }
})();