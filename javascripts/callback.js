/*
console.log('A'); // xu ly dong bo

setTimeout(() => {
    // sau 1s thi se thuc thi hanh dong
    // thuc thi duy nhat 1 lan
    console.log('B');
}, 0); // xu ly bat dong bo

console.log('C'); // xu ly dong bo
*/

function filter(numbers, fn) {
    // fn : function
    if(typeof fn !== 'function'){
        return null;
    }

    let results = [];
    for(const number of numbers) {
        if(fn(number)){
            results.push(number)
        }
    }
    return results;
}

const isOdd = n => n % 2 !== 0;
const isEven = n => n % 2 === 0;

const arrNumber = [1,2,3,4,5,6,7,8,9,10];
console.log(filter(arrNumber, isOdd));
console.log(filter(arrNumber, isEven));
console.log(filter(arrNumber, n => n % 3 === 0));