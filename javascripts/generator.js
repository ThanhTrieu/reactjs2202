function foo(){
    console.log('I');
    console.log('Can not');
    console.log('pause');
}
//foo();

// Dung ham(ko thuc thi nua) truoc khi ham ket thuc(chay xong)
// Co the tiep tuc chay lai ham do o thoi diem khac
// ==> xu ly bang generator function
// dinh nghia generator function
// phai su dung function declaration
function* generate(){
    console.log('invoked 1st time');
    yield 100; // pause - tra ket qua ve
    console.log('invoked 2nd time');
    yield 2; // dung thuc thi - tra ket qua ve
}
let gen = generate();// object - Generator
//console.log(gen);
//let result = gen.next();
//console.log(result);
//let result2 = gen.next();
//console.log(result2);
//let result3 = gen.next();
//console.log(result3);

// duyet qua object - Generator
for(const g of gen) {
    //console.log(g);
}

function* foreverLoop(){
    let index = 0;
    while(true) {
        yield index++; // sau moi lan lap tra ve ket qua dung ham - se thuc tiep sau
    }
}
// trong truong hop nay done : mai mai la false
let fl = foreverLoop(); // object - Generator
console.log(fl.next().value); // 0
console.log(fl.next().value); // 1
console.log(fl.next().value); // 2
console.log(fl.next().value); // 3