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

const CONTRACT_ABI = [{"constant":false,"inputs":[{"name":"secondary","type":"address"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"secondary","type":"address"}],"name":"changeAuthenticationKey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"secondaryInUse","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"primaryToSecondary","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"primaryAddress","type":"address"},{"indexed":false,"name":"secondaryAddress","type":"address"}],"name":"Registration","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"Error","type":"event"}];

const COMPILED_CONTRACT = '6060604052341561000c57fe5b5b6106d68061001c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634420e4861461005c5780635d0c72eb146100925780636a50654a146100c8578063d352221e14610116575bfe5b341561006457fe5b610090600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061018c565b005b341561009a57fe5b6100c6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104b6565b005b34156100d057fe5b6100fc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610657565b604051808215151515815260200191505060405180910390f35b341561011e57fe5b61014a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610677565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561027d577faf51d07acb94ab3953cee4d32a199aa0f72cba22f1fbfd2c5137901e160b5446600033604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a160006000fd5b80600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610342577faf51d07acb94ab3953cee4d32a199aa0f72cba22f1fbfd2c5137901e160b5446600133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a160006000fd5b81600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f2a4f530ae55f002aac4686b649762fc68e96bd8b80ac835b41777145c94e1f8a3383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5b505b50565b80600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561057b577faf51d07acb94ab3953cee4d32a199aa0f72cba22f1fbfd2c5137901e160b5446600133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a160006000fd5b81600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b5050565b60016020528060005260406000206000915054906101000a900460ff1681565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058207ff5f947d16c356fde9062950cfa640988b9437f3224d9fced6b9679f78bee740029';

module.exports =  contractInfoFactory.createContractInfo(CONTRACT_ABI, COMPILED_CONTRACT);

