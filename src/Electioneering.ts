import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Electioneering {
    recent(): any;
    year(args: any): any;
}

export class Electioneering implements IEndPoint {
    baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl + '/' + 'electioneering_communications';
    }
}

var subStrs = {
    'recent': '.json',
    'date': '{year}/{month}/{day}.json'
}

for (let key in subStrs) {
    Electioneering.prototype[key] =  function(args) { return apiRequest(this.baseUrl, subStrs[key], args); };
}