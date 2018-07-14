import * as rp from 'request-promise';

const apiKey = '';

rp({
    headers: {
      'X-API-Key': apiKey,
    },
    uri: 'https://api.propublica.org/campaign-finance/v1/2018/contributions/48hour.json',
    method: 'GET'
  })
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});