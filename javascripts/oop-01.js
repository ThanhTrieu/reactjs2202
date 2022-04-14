// dinh nghia class js
class Student {
    // thuoc tinh(property) - dac diem tinh chat cua doi tuong
    // phuong thuc(method) - hanh dong cua doi tuong

    // 1 - khai bao lam viec voi thuoc tinh
    // khong dung tu khoa khai bao bien (var let) - hang so (const)
    name = 'Teo';
    age  = 20;

    constructor(mail){
        // day la magic method
        // phuong thuc co san trong class js
        // phuong thuc chay dau tien khi khoi tao doi tuong cho class
        // thong thuong day se la noi khai bao thuoc tinh
        this.email = mail;
        console.log('Phuong thuc constructor da chay');
        console.log(this.email);
    }

    getEmail = () => {
        return this.email;
    }

    // 2 - khai bao phuong thuc
    getName(){
        return this.name;
    }

    getAge = (myAge) => {
        return myAge === undefined ? this.age : myAge;
    }
}

// khai bao doi thuoc cua class
let st = new Student('teo@gmail.com'); // constructor chay dau tien
// truy cap vao thuoc tinh ben trong class
console.log(st.name);
// truy cap vao phuong thuc
console.log(st.getName());
console.log(st.getAge(30));
console.log(st.getEmail());