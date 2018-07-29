import {CampaignFinance} from './src/CampaignFinance';

let c = new CampaignFinance('2016');
// c.candidates.recent(null)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// c.candidates.leaders({'category': 'candidate-loan'})
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

c.committees.search({'committee': 'AMERICANS FOR A'})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});