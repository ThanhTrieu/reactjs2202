import { getDataCoronaV2 } from './services/covid.mjs';

const data = getDataCoronaV2();
//console.log(data.next());
const p = data.next().value;
p.then(res =>  res.json())
.then(t => console.log(t))
.catch(err => console.log(err));