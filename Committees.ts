import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Committees {
    search(args: any): any;
    committee(args: any): any;
    recent(args: any): any;
    recentSuperpac(args: any): any;
    filings(args: any): any;
}

export class Committees implements IEndPoint {
    baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl + '/' + 'committees';
    }
}

var subStrs = {
    'search': 'search.json?query={committee}',
    'committee': '{fec-id}.json',
    'recent': 'new.json',
    'recentSuperpac': 'superpacs.json',
    'filings': '{fec-id}/filings.json',
    'leadership': 'committees/leadership.json'
}

for (let key in subStrs) {
    Committees.prototype[key] =  function(args) { return apiRequest(this.baseUrl, subStrs[key], args); };
}