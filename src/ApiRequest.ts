import * as rp from 'request-promise';

export function apiRequest (baseStr: String, apiKey: string, endpoint, args: any): any{
  let urlStr = baseStr + '/' + buildUrlStr(endpoint, args);

  return rp({
      headers: {
        'X-API-Key': apiKey,
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
