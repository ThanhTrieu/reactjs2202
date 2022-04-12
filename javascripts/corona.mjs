import { getDataCorona } from './services/covid.mjs';


const loadDataFromApi = async () => {
    const data = await getDataCorona();
    console.log(data);
}
loadDataFromApi();