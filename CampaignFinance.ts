import {Candidates} from './Candidates';
import {Committees} from './Committees';

export class CampaignFinance {
    constructor(year: string) {
        let baseStr = 'https://api.propublica.org/campaign-finance/v1/' + year;

        this.candidates = new Candidates(baseStr);
        this.committees = new Committees(baseStr);
    }

    candidates: Candidates;
    committees: Committees;
}