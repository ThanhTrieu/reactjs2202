//console.log('Hello word');
// comment tren 1 dong
/*
comment tren nhieu dong
*/
// khai bao bien : tu khoa var hoac let
// khai bao hang so: tu khoa const

/* JS khong quy dinh san kieu du lieu cho bien
    kieu du lieu se duoc nhan khi gan gia tri cho bien
 */
// C/C++ : int number = 10;
// JS : let number = 10; hoac var number = 10;
// JS ngon ngu thong dich

// cac kieu du lieu trong JS
// JS co 8 kieu du lieu
// 7 kieu DL nguyen thuy
// 1 kieu object(method) khong phai kieu dl nguyen thuy

// 1 - number
let number = 10; // bien number dc gan bawng 1 so ==> kieu DL number
// kiem tra kieu du lieu
// console.log() : hien thi ket qua o man hinh debug
console.log(typeof(number));
console.log(typeof number);

let number2 = 10.10;
console.log(typeof number2);

let n = 10;
let m = '20b';
let z = n - m;
console.log(typeof z); // number
console.log(z); // NaN : not a number

let i = 0;
let j = n/i; // c/c++ : loi (ko dc phep chia cho 0)
console.log(typeof j); // number
console.log(j); // Infinity

// 2 - string (chuoi)
// quy dinh : gia tri nam trong '' hoac " " hoac ``
let myName = 'Van Teo';
let email = "vanteo@gmail.com";
let address = `Ha Noi`;
console.log(typeof(myName)); // string
console.log(typeof(email)); // string
console.log(typeof(address)); // string

// 3 - boolean
let checking = false; // chi nhan 2 gia tri : true hoac false
console.log(typeof checking);
// 4 - null
let anyValue = null;
// 5 - undefined
let test = undefined;
// symbol - object : buoi rieng noi sau

let x = 10; // number
let y = '20'; // string
let s = x + y; // + : phep toan hoc, phep ghep chuoi 
console.log(s); // ??? 1020
let s2 = x - y;
console.log(s2);
// number string : trong chuoi chi chua so

let v1 = ''; // string
let v2 = false; // boolean
let v3 = 0; // number
// bang nhau ve mat gia tri : khai niem nhay cam trong lap trinh
if(v1 === v2) {
    console.log('AAA'); // ok
} else {
    console.log('BBB');
}
let v4 = true;
let v5 = 1;
// bang nhau ve mat gia tri : khai niem nhay cam trong lap trinh

let age; // ko gan gia tri - mac dinh la kieu undefined
console.log(typeof age);
let demo  = null; // bien do chua dc cap phat dia chi o de luu gia tri ==> bien do chua ton tai
let demo2 = '';

// khai bao bien : khong bat dau bang so - khong trung vs tu khoa trong lap trinh
// bien trong js phan biet chua hoa, chu thuong
// tu khoa var : co truoc tu khoa let
// tu khoa let chi dc dung tu phien ban ES6 tro len
// tu phien ban ES6 tro len ko nen dung tu khoa var
// phan biet var - let trong js

let scope = 10;
if(true){
    let scope = 20;
    if(true){
        let scope = 30;
        console.log(scope); // ???
    }
    console.log(scope);// ??????
}
console.log(scope);//???

var scope2 = 20;
function checkScope() {
    var scope2 = 30; // khac bien ben ngoai
    console.log(scope2);
}
console.log(scope2); // bien ko phai bien trong ham
checkScope(); // goi ham ra su dung

let abc = 10;
//let abc = 20; // loi - khong dc phep dinh nghia lai bien da khai bao
console.log(abc);

// khai bao hang so
const PI = 3.14; // se ko thay doi gia tri trong suot qua trinh thuc thi
console.log(PI);
// dat ten hang so : viet hoa cac tu cach nhau dau gach duoi
// const MY_NAME = 'teo';
// ko bat buoc
// let homNayHocJavascript = 'js'; //camelcase

/****************** Cac bieu thuc dieu kien co ban ***************/
// while : vong lap kiem tra dieu kien truoc
// so lan vong toi da : n (khi dieu kiem tra luon luon dung - vong lap vo han)
// so vong lap toi thieu: 0 (khi dieu kien tra sai ngay tu dau - ko thuc thi bat ky vong lap nao)

let k = 10;
while( k < 100) {
    console.log(k);
    k++; // tang len 11 (chua thuc su len)
}

// do ... while : vong lap kiem tra dieu kien sau
// so lan vong toi da : n (khi dieu kiem tra luon luon dung - vong lap vo han)
// so vong lap toi thieu: 1 (Tai vi dieu kien tra sau khi thuc thi it nhat 1 vong lap)

let g = 1;
do {
    console.log(g);
    g++;
} while( g < 10);
