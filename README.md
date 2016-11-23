# Ethhereum registration service module 

## Installation (global)

```sh
npm install eth-registration-service  -g
```

## Usage

The module provides with API for registering and authenticating

```javascript
const ETHEREUM_HOST = 'http://go-ethereum:8545';
const EthereumRegistrationService = require('eth-registration-service');
const ethereumRegistrationService = new EthereumRegistrationService(ETHEREUM_HOST);
```

