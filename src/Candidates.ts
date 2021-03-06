import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Candidates {
    search(args: any): any;
    leaders(args: any): any;
    recent(): any;
    candidate(args: any): any;
    lateContributions(args: any): any;
    independentExpenditures(args: any): any;
}

export class Candidates implements IEndPoint {
    baseUrl: string;
    apiKey: string;

    constructor(baseUrl: string, apiKey: string){
        this.baseUrl = baseUrl + '/' + 'candidates';
        this.apiKey = apiKey;
    }
}

var subStrs = {
    'search': 'search.json?query={candidate}',
    'recent': 'new.json',
    'leaders': 'leaders/{category}.json',
    'candidate': '{fec-id}.json',
    'lateContributions': '{fec-id}/48hour.json',
    'independentExpenditures': '{fec-id}/independent_expenditures.json'
}

for (let key in subStrs) {
    Candidates.prototype[key] =  function(args) { return apiRequest(this.baseUrl, this.apiKey, subStrs[key], args); };
}