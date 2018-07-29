import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Filings {
    search(args: any): any;
    date(args: any): any;
    types(): any;
    type(args: any): any;
    filing(args: any): any;
    amendments(): any;
}

export class Filings implements IEndPoint {
    baseUrl: string;
    apiKey: string;

    constructor(baseUrl: string, apiKey: string){
        this.baseUrl = baseUrl + '/' + 'filings';
        this.apiKey = apiKey;
    }
}

var subStrs = {
    'search': 'search.json?query={committee}',
    'date': '{year}/{month}/{day}.json',
    'types': 'types.json',
    'type': 'types/{form-type-id}.json',
    'filing': '{filing_id}.json',
    'amendments': 'amendments.json'
}

for (let key in subStrs) {
    Filings.prototype[key] =  function(args) { return apiRequest(this.baseUrl, this.apiKey, subStrs[key], args); };
}