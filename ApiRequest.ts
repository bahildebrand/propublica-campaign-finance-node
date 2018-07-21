import * as rp from 'request-promise';

export function apiRequest (baseStr: String, endpoint, args: any): any{
  let urlStr = baseStr + '/' + buildUrlStr(endpoint, args);

  console.log(urlStr);
  return rp({
      headers: {
        'X-API-Key': 'wNS0K9IzjjbbmynKBhBmcSTy6DVt2P092qCkNu53',
      },
      uri: urlStr,
      method: 'GET'
    });
}

function buildUrlStr(str: String, args) {
  return str.replace(/{([^{}]*)}/g, function(a,b) {
      return args[b];
  });
}
