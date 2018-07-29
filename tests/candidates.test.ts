import {CampaignFinance} from '../src/CampaignFinance'

const c = new CampaignFinance('2016', 'wNS0K9IzjjbbmynKBhBmcSTy6DVt2P092qCkNu53');

test( "Test search is returning properly", () => {
    c.candidates.search({"candidate": "trump"})
    .then( (result) => {
        expect(JSON.parse(result)["status"]).toBe('OK');
    })
});

test( "Test recent is returning properly", () => {
    c.candidates.recent()
    .then( (result) => {
        expect(JSON.parse(result)["status"]).toBe('OK');
    })
});

test( "Test leaders is returning properly", () => {
    c.candidates.leaders({'category': 'candidate-loan'})
    .then( (result) => {
        expect(JSON.parse(result)["status"]).toBe('OK');
    })
});

test( "Test late contributions is returning properly", () => {
    c.candidates.lateContributions({'fec-id': 'C00672899'})
    .then( (result) => {
        expect(JSON.parse(result)["status"]).toBe('OK');
    })
});

test( "Test candidate fetch is returning properly", () => {
    c.candidates.candidate({'fec-id': 'P60005915'})
    .then( (result) => {
        expect(JSON.parse(result)["status"]).toBe('OK');
    })
});

test( "Test independent expenditure fetch is returning properly", () => {
    c.candidates.independentExpenditures({'fec-id': 'P00003392'})
    .then( (result) => {
        expect(JSON.parse(result)["status"]).toBe('OK');
    })
});