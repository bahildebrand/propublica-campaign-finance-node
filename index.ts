import {CampaignFinance} from './CampaignFinance';

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

c.candidates.candidate({'fec-id': 'P60005915'})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});