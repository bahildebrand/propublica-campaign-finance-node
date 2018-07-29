import {Candidates} from './Candidates';
import {Committees} from './Committees';
import {Filings} from './Filings';
import {IndependentExpenditures} from './IndependentExpenditures'
import {President} from './President'
import {Electioneering} from './Electioneering'

export class CampaignFinance {
    constructor(year: string) {
        let baseStr = 'https://api.propublica.org/campaign-finance/v1/' + year;

        this.candidates = new Candidates(baseStr);
        this.committees = new Committees(baseStr);
        this.filings = new Filings(baseStr);
        this.independentExpenditures = new IndependentExpenditures(baseStr);
        this.president = new President(baseStr);
        this.electioneering = new Electioneering(baseStr)
    }

    candidates: Candidates;
    committees: Committees;
    filings: Filings;
    independentExpenditures: IndependentExpenditures;
    president: President;
    electioneering: Electioneering;
}