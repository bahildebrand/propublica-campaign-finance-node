import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Candidates {
    search(args: any): any;
    leaders(args: any): any;
    recent(args: any): any;
    candidate(args: any): any;
}

export class Candidates implements IEndPoint {
    baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl + '/' + 'candidates';
    }
}

var subStrs = {
    'search': 'search.json?query={candidate}',
    'recent': 'new.json',
    'leaders': 'leaders/{category}.json',
    'candidate': '{fec-id}.json'
}

for (let key in subStrs) {
    Candidates.prototype[key] =  function(args) { return apiRequest(this.baseUrl, subStrs[key], args); };
}