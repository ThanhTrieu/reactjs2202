// 1 function Declarations
function sumNumber(a, b = 2){
    return a + b;
    // return : tra ket qua ve cho ham - thoat khoi ham
}
// function: keyword
// sumNumber: name function (tu dinh nghia)
// n, m tham so truyen vao ham (tham so hinh thuc)
// b = 2 : gan gia tri mac dinh cho tham so hinh thuc

// goi ham ra su dung
let res = sumNumber(1, 5); // 1, 5 : tham so thuc (that)
console.log(res);

function sum(n, m, ...params){
    // ...params : rest param : truyen n tham so vao duoi dang mot mang
    console.log(params);
}
sum(1,2,3,4,5,6,7,8,9);

// viet ham : kiem tra 1 so co phai so nguyen to ko ?
/*
function kiemTraSoNguyenTo(n) {
    let s = Math.sqrt(n);
    for(let i = 2; i <= s; i++) {

    }
}
*/

// 2 - function expression

// let ck = kiemTraChanLe(4);
// console.log(ck);

let kiemTraChanLe = function(n){
    if(n%2 === 0){
        return true;
    }
    return false;
}

let ck = kiemTraChanLe(4);
console.log(ck);

// 3 - Arrow function expression

// console.log(kiemTraChanLe2(1)); //sai

let kiemTraChanLe2 = (n) => n %2 === 0

//console.log(kiemTraChanLe2(1));

m => m % 2 === 0;
let tinhGiaiThua = (n) => {
    // code in here
    let gt = 1;
    for(let i = 1; i<= n; i++) {
        gt *= i;
    }
    return gt;
}
console.log(tinhGiaiThua(5));
console.log(Number.MIN_VALUE);

let a = '123j';
if(!isNaN(a)){
    console.log('OK');
} else {
    console.log('ERR');
}

/* string JS */
let time = '22h00';
let str = `Chung ta se nghi vao luc ${time}`;
let str2 = `
    <div>
        <h2> hi you</h2>
    </div>
`;
console.log(str);

let str3 = ` chung ta dang hoc js `;
//let findText = str3.indexOf('js');
let findText = str3.lastIndexOf('js');
console.log(findText, str3.length);
let t = str3.trim(); // xoa khoang trang 2 dau
console.log(t.length);

// symbol
let id1 = Symbol('id');
let id2 = Symbol('id');
if(id1 == id2){
    console.log('A');
} else {
    console.log('B');
    console.log(id1, id2);
}