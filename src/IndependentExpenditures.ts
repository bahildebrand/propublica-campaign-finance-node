import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface IndependentExpenditures {
    recent(): any;
    date(args: any): any;
    raceTotals(args: any): any;
}

export class IndependentExpenditures implements IEndPoint {
    baseUrl: string;
    apiKey: string;

    constructor(baseUrl: string, apiKey: string){
        this.baseUrl = baseUrl + '/' + 'independent_expenditures';
        this.apiKey = apiKey;
    }
}

var subStrs = {
    'recent': '.json',
    'date': '{year}/{month}/{day}.json',
    'raceTotals': 'race_totals/{office}.json'
}

for (let key in subStrs) {
    IndependentExpenditures.prototype[key] =  function(args) { return apiRequest(this.baseUrl, this.apiKey, subStrs[key], args); };
}