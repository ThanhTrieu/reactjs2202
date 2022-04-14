import fetch from 'node-fetch';

export const getDataCorona = async () => {
    const urlApi = `https://api.covid19api.com/summary`;
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

export function* getDataCoronaV2(){
    const urlApi   = `https://api.covid19api.com/summary`;
    yield fetch(urlApi);
}