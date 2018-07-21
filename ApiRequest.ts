import * as rp from 'request-promise';

export function apiRequest (url: String): any{

return rp({
    headers: {
      'X-API-Key': 'wNS0K9IzjjbbmynKBhBmcSTy6DVt2P092qCkNu53',
    },
    uri: url,
    method: 'GET'
  });
}