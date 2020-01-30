let o = {
    name : 'o'
};
let a = Object.create(o);
// console.log(o);
// console.log(a);
let c = new Object();
// console.log(c);

//ООП
let dog = {
    name    : 'Белый Клык',
    breed   : 'Корги',
    age     : 2
};

function info(d){
    console.log(`${d.name} : ${d.breed}`);
}

function changeAge(d, shift){
    d.age += shift;
    console.log(`${d.name}: ${d.age} years old`);
}

// info(dog);
// changeAge(dog, .5);

class Dog{
    #name = '';
    constructor(n = 'Белый Клык', b = 'Корги', a = 2){
        this.#name  = n;
        this.breed  = b;
        this.age    = a;
    }
    changeAge(shift = 0){
        this.age += shift;
        console.log(`${this.#name}: ${this.age} years old`);
    }
    info(){
        console.log(`${this.#name} : ${this.breed}`);
        console.log(this);
    }
}

let tDog = new Dog();
