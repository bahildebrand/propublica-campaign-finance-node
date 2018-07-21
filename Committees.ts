import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export interface Committees {
    search(args: any): any;
}

export class Committees implements IEndPoint {
    baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl + '/' + 'committees';
    }
}

var subStrs = {
    'search': 'search.json?query={committee}',
}

for (let key in subStrs) {
    Committees.prototype[key] =  function(args) { return apiRequest(this.baseUrl, subStrs[key], args); };
}