import {IEndPoint} from './types';
import {apiRequest} from './ApiRequest';
import {buildUrlStr} from './util'

export class Candidates implements IEndPoint {
    endpointStr: String = 'candidates';

    constuctor(){}

    subStrs = {
        'search': 'search.json?query={candidate}'
    }

    apiCall(baseStr: String, endpoint: String, args: any) {
        let urlStr: String = this.subStrs['search'];

        urlStr = baseStr + '/' + this.endpointStr + '/' + buildUrlStr(urlStr, args);

        return apiRequest(urlStr);
    }
}