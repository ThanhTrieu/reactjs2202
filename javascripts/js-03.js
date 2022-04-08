// array js
// kieu du lieu : object
// cu phap
let numbers = [1,2,3,4,5]; // short syntax
let numbers2 = new Array(1,2,3,4,5);
console.log(numbers, numbers2);
// key : value
// key(index): vi tri cua phan tu nam trong mang luon luon bat dau tu 0
// value: gia tri phan tu nam trong mang
// cach truy cap phan tu nam trong mang : NameArray[key/index];
// vd
console.log(numbers[2]); //3
// kiem tra so luong phan tu trong mang
console.log(numbers.length);
// ko phai mang don
let fruits = ['cam','quyt',[1,2,3], 'tao', ['teo', 'ti']];
// teo ???
console.log(fruits[4])//['teo', 'ti'];
console.log(fruits[4][0]); // 'teo'

let numArr = [1,2,3,4,5,6,7,8,9];
// duyet mang

// 1 - for
let lengthArr = numArr.length;
for(let i = 0; i < lengthArr; i++){
    console.log(numArr[i]);
}
// 2 forEach
// callback function
numArr.forEach(function(e,k,arr){
    // k : key(index)
    // e: gia tri cua phan tu
    // arr: mang ban dau
    console.log(`index : ${k} - value : ${e}`);
});
// 3 for ... of
for(let j of numArr) {
    // j : gia tri phan tu
    // ko the lay ra dc vi tri cua phan tu (index/key)
    console.log(j);
}

// viet ham tim phan tu lon nhat - nho nhat trong mang
const getMaxElement = (arr) => {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxElement(numArr));
let numArr3 = [10,13,14,15,16,19,20,30,32,45,44,99];
// viet ham tra ve mong mang chua toan cac so chinh phuong???
// tra ve 1 mang chua toan so chan
let res = numArr3.filter(item => item % 2 === 0).reduce((pre,next) => pre + next);
console.log(res);

const students = [
    {
        id: 1,
        name: 'Teo',
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Ty',
        address: 'Ha Nam'
    }
];
const data = students.map((item, key) => (`
    <tr class="${key}">
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.address}</td>
    </tr>
`) );
console.log(data);

/***** object js *******/
// object literal
const cars = {
    color: 'white',
    weight: 500,
    model: {name: 'bmw', address: 'Ha Noi'},
    price: 1000,
    start: function(){
        console.log(this) // chinh la object ban dau (luu y : khong duoc dung arrow function)
        return this.price
    },
    stop: (place) => {
        console.log(this);
        return place + this.color; // this ko phai la object dang thao tac
    }
};
// truy cap thuoc tinh - phuong thuc
// nameObject.index || nameObject[index]
console.log(cars.model.name);
console.log(cars.start());
console.log(cars.stop('HCM'));

const obj = {a: 10, b: 20};
obj.c = 30;
console.log(obj);
// destructing
const { c } = obj;
console.log(c);