import { api } from './services/weather.mjs';

const loadDataFromApi = async () => {
    const weather = await api.searchDataWeather('Tokyo');
    console.log(weather);
}
loadDataFromApi();
// 