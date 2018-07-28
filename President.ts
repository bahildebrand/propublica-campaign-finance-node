import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface President {
    totals(): any;
    candidates(args: any): any;
    location(args: any): any;
}

export class President implements IEndPoint {
    baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl + '/' + 'president';
    }
}

var subStrs = {
    'totals': 'totals.json',
    'candidates': 'candidates/{candidate}.json',
    'location': '{resource-type}/{location}.json'
}

for (let key in subStrs) {
    President.prototype[key] =  function(args) { return apiRequest(this.baseUrl, subStrs[key], args); };
}