class A {
    constructor(){
        this.name = 'Teo';
    }

    static getName() {
        //console.log(this);
        return this.name;
    }

    static setName(){
        console.log(this);
        return this.getName();
    }

    getMyName = () => {
        console.log(this);
        return A.getName();
    }

    getMyName2(){
        console.log(this);
        return this.getName();
    }
}
// vi method getName la static thi ko can doi tuong cua class truy cap
// truy cap thang bang class do luon
//console.log(A.getName());
let a = new A();
//console.log(A.setName());
//console.log(a.getMyName());
//console.log(a.getMyName2());