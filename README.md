# Status
[![Build Status](https://travis-ci.org/bahildebrand/propublica-campaign-finance-node.svg?branch=master)](https://travis-ci.org/bahildebrand/propublica-campaign-finance-node) [![Greenkeeper badge](https://badges.greenkeeper.io/bahildebrand/propublica-campaign-finance-node.svg)](https://greenkeeper.io/)

# propublica-campaign-finance-node
Node wrapper for ProPublica campaign finance API.

# Getting Started
First request an api key [here](https://www.propublica.org/datastore/api/campaign-finance-api).

Declare a new instance of the object as follows:

```javascript
var ppcf = require('ppcf');

var p = new ppcf('2016', 'API_KEY_HERE');
```

All function calls share the name of the API and accept a json object with the field indicated in the brackets of indicated in the API [documentation](https://projects.propublica.org/api-docs/campaign-finance/), and return a promise with the result being a json object.

Below is an example of the candidate search function:

```javascript
p.candidates.search({"candidate":"trump"})
.then((result) => {
    console.log(result);
})
```
