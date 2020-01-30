import {a, setName, Car, SportCar} from './funcs.js';
console.log(setName(a));
let main = 'hhh';
let vw = new Car(undefined, undefined,'VW');
let skoda = new Car(60, 8, 'Skoda');
console.log('VW: ', vw.maxD);
console.log('Skoda: ', skoda.maxD);
// skoda.setTank("много литров");
skoda.tank = 230;

console.log('Skoda: ', skoda.maxD);

console.log('Cars: ', Car.count);
console.log(Car.showNames());

console.clear();
let bug = new SportCar(100, 15, 'Buggatti');
console.log(bug);
