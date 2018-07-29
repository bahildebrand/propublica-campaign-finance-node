import {Candidates} from './Candidates';
import {Committees} from './Committees';
import {Filings} from './Filings';
import {IndependentExpenditures} from './IndependentExpenditures'
import {President} from './President'
import {Electioneering} from './Electioneering'

export class CampaignFinance {
    constructor(year: string, apiKey: string) {
        let baseStr = 'https://api.propublica.org/campaign-finance/v1/' + year;

        this.candidates = new Candidates(baseStr, apiKey);
        this.committees = new Committees(baseStr, apiKey);
        this.filings = new Filings(baseStr, apiKey);
        this.independentExpenditures = new IndependentExpenditures(baseStr, apiKey);
        this.president = new President(baseStr, apiKey);
        this.electioneering = new Electioneering(baseStr, apiKey)
    }

    candidates: Candidates;
    committees: Committees;
    filings: Filings;
    independentExpenditures: IndependentExpenditures;
    president: President;
    electioneering: Electioneering;
}