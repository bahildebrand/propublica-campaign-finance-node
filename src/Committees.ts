import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Committees {
    search(args: any): any;
    committee(args: any): any;
    recent(args: any): any;
    recentSuperpac(args: any): any;
    filings(args: any): any;
    leadership(): any;
    independentExpenditures(args: any): any;
    IERaces(args: any): any;
    electioneering(args: any): any;
    bundlers(args: any): any;
}

export class Committees implements IEndPoint {
    baseUrl: string;
    apiKey: string;

    constructor(baseUrl: string, apiKey: string){
        this.baseUrl = baseUrl + '/' + 'committees';
        this.apiKey = apiKey;
    }
}

var subStrs = {
    'search': 'search.json?query={committee}',
    'committee': '{fec-id}.json',
    'recent': 'new.json',
    'recentSuperpac': 'superpacs.json',
    'filings': '{fec-id}/filings.json',
    'leadership': 'committees/leadership.json',
    'independentExpenditures': '{fec-id}/independent_expenditures.json',
    'IERaces': '{fec-id}/independent_expenditures/races.json',
    'electioneering': '{fec-id}/electioneering_communications.json',
    'bundlers': '{fec-id}/lobbyist_bundlers.json'
}

for (let key in subStrs) {
    Committees.prototype[key] =  function(args) { return apiRequest(this.baseUrl, this.apiKey, subStrs[key], args); };
}