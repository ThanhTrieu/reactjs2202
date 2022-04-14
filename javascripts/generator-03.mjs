import { api } from './services/weather.mjs';

const data = api.searchDataWeatherV2('Tokyo');
//console.log(data.next().value);
const weather = data.next().value;
weather.then(result => result.data)
.then(res => console.log(res))
.catch(err => console.log(err));