import axios from "axios";

const searchDataWeather = async (city) => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    const response = await axios.get(urlApi);
    const weather  = await response.status === 200 ? await response.data : {};
    return weather;
}

function* searchDataWeatherV2(city){
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    yield axios.get(urlApi);
}

export const api = {
    searchDataWeather,
    searchDataWeatherV2
}