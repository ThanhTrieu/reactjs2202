class A {
    constructor(){
        this.name = ' Teo';
        this.age = 20;
    }

    getName() {
        return this.name;
    }
}

class B extends A {
    constructor(){
        // overwrite
        super();
        this.name = 'Hoi';
    }
    getName = () => {
        // override
        return 'Ty';
    }
    showName() {
        //return super.getName(); // A
        return `${this.name} --- ${this.age}`;
    }
}

const b = new B();
console.log(b.showName()); // ??? Ty ?? Teo

// instanceof: kiem tra 1 thanh phan co phai la doi tuong thuoc class hay ko?
if(b instanceof B){
    console.log('ok')
    // su dung object b de truy cap - lam viec voi thuoc tinh - phuong thuc trong class
} else {
    console.log('err');
}