export let a = 'Hell';
export function setName(name){
    return name;
}

export class Car{
    static count = 0;
    static cars = [];
    #tank;
    #maxTank;
    constructor(tank = 50, fuelPer100 = 6, name = 'Unnamed'){
        Car.count++;
        Car.addCarName(name);
        this.#tank = tank;
        this.#maxTank = tank;
        this.fuelPer100 = fuelPer100;
    }

    static addCarName(name){
        Car.cars.push(name);
    }
    static showNames(){
        return Car.cars;
    }

    get maxD(){//getter, исчисляемое свойство
        return Math.floor(this.#tank / this.fuelPer100) * 100;
    }

    set tank(newT){//Пополнение бака
        if(!isNaN(newT)){//Проверка на число
            newT = parseFloat(newT);
            if(this.#tank + newT <= this.#maxTank){
                this.#tank += newT;
            }
        }
    }   

}

export class SportCar extends Car{
    constructor(tank, fuel100, name, maxSpeed = 520){
        super(tank, fuel100, name);
        this.maxSpeed = maxSpeed;
    }
}