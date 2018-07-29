import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Electioneering {
    recent(): any;
    year(args: any): any;
}

export class Electioneering implements IEndPoint {
    baseUrl: string;
    apiKey: string;

    constructor(baseUrl: string, apiKey: string){
        this.baseUrl = baseUrl + '/' + 'electioneering_communications';
        this.apiKey = apiKey;
    }
}

var subStrs = {
    'recent': '.json',
    'date': '{year}/{month}/{day}.json'
}

for (let key in subStrs) {
    Electioneering.prototype[key] =  function(args) { return apiRequest(this.baseUrl, this.apiKey, subStrs[key], args); };
}