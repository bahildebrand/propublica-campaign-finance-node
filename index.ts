import {CampaignFinance} from './CampaignFinance';

let c = new CampaignFinance('2016');
c.candidates.search({'candidate': 'wilson'})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});