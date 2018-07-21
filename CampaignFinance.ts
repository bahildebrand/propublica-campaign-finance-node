import {Candidates} from './Candidates';

export class CampaignFinance {
    constructor(year: string) {
        let baseStr = 'https://api.propublica.org/campaign-finance/v1/' + year;

        this.candidates = new Candidates(baseStr);
    }

    candidates: Candidates;
}