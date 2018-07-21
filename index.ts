import {Candidates} from './Candidates';

let c = new Candidates();
c.apiCall('https://api.propublica.org/campaign-finance/v1/2016', 'search', {'candidate': 'wilson'})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});