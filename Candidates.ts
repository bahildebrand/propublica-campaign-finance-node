import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';

export class Candidates implements IEndPoint {
    baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl + '/' + 'candidates';
    }

    subStrs = {
        'search': 'search.json?query={candidate}'
    }

    search(args: any): any {
        return apiRequest(this.baseUrl, this.subStrs['search'], args);
    }
}