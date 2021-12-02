// class Transport {
//     #owner
//
//     constructor(mode, owner, start) {
//         this.mode = mode
//         this.#owner = owner
//     }
//
//     getOwner() {
//         return this.#owner
//     }
//
//
//     makeStart() {
//         console.log(this.start)
//     }
//
//     isStarted() {
//         console.log('Transport is started')
//     }
// }
//
// // const transport = new Transport('air', "Adi")
//
// class Car extends Transport {
//     volume = 2
//     year = 2020
//     colour = "black"
//
//     constructor(mode, owner, start, volume, year, colour) {
//         super(mode, owner, start);
//         this.volume = volume
//         this.year = year
//         this.colour = colour
//     }
//
//     makeStart() {
//         console.log(this.start)
//     }
//
//     isStarted() {
//         console.log('Car is started')
//     }
// }
//
// const car = new Car('', '', '', 2.5, 2004,)
// console.log(car.getOwner())
//
// class Ship extends Transport {
//     weight = 10000
//
//
//     makeStart() {
//         console.log(this.start)
//     }
//
//     isStarted() {
//         console.log('Ship is started')
//     }
// }
//
// class Plane extends Transport {
//     name = Boeing
//
//
//     makeStart() {
//         console.log(this.start)
//     }
//
//     isStarted() {
//         console.log('Plane is started')
//     }
// }
// // mode, owner, start, volume, year, colour
// const cars = [
//     new Car('', 'Adi', 'start', 2.5, 2007, 'blue'),
//     new Car('', 'Adi', 'start', 2.4, 2002, 'green'),
//     new Car('', 'Adi', 'start', 2.3, 2003, 'red'),
//     new Car('', 'Adi', 'start', 2.2, 2006, 'red'),
//     new Car('', 'Adi', 'start', 2.6, 2014, 'red'),
//     new Car('', 'Adi', 'start', 3, 2012, 'red'),
// ]
// cars.forEach(car => console.log(car))
// console.log(cars)
//
//
// class Transport {
//     #owner
//
//     constructor(name, type, owner) {
//         this.name = name
//         this.type = type
//         this.#owner = owner
//     }
//     getOwner(){
//         console.log(this.#owner)
//         return this.#owner
//     }
//
//     star(){
//         console.log('Транспорт заведен')
//     }
// }
// const transport = new Transport()
// transport.getOwner()
// transport.star()
//
// //------------------------------------------------
//
// class Car extends Transport {
//     constructor(speed, name, type) {
//         super(name, type);
//         this.speed = speed
//     }
//     start () {
//         console.log('---------------------')
//         super.start()
//     }
// }
// const toyota = new Car('320', 'toyota A80', 'Sport Car')
//
// //-------------------------------------------------
//
// class Ship extends Transport {
//     constructor(name, type, country) {
//         super(name, type, country);
//         this.country = country
//     }
// }
// const Makassar = new Ship('Makassar', 'battle ship', 'Indonesia')
//
// //-------------------------------------------------
//
// class Plane extends Transport {
//     constructor(name, type, modelYear) {
//         super(name, type, modelYear);
//         this.modelYear =  modelYear
//     }
// }
// const bomber = new Plane('Илья муромец', 'Bomber Plane', 1914)

class Transport {
    #owner

    constructor(name, type, owner) {
        this.name = name
        this.type = type
        this.#owner = owner
    }
    getOwner(){
        console.log(this.#owner)
        return this.#owner
    }

    star(){
        console.log('Транспорт заведен')
    }
}
const transport = new Transport()
transport.getOwner()
transport.star()

//------------------------------------------------

class Car extends Transport {
    constructor(speed, name, type) {
        super(name, type);
        this.speed = speed
    }
    start () {
        console.log('---------------------')
        super.star()
    }
}
const toyota = new Car('320', 'toyota A80', 'Sport Car')
toyota.start()
//-------------------------------------------------

// class Ship extends Transport {
//     constructor(name, type, country) {
//         super(name, type, country);
//         this.country = country
//     }
// }
// const Makassar = new Ship('Makassar', 'battle ship', 'Indonesia')
//
// //-------------------------------------------------
//
// class Plane extends Transport {
//     constructor(name, type, modelYear) {
//         super(name, type, modelYear);
//         this.modelYear =  modelYear
//     }
// }
// const bomber = new Plane('Илья муромец', 'Bomber Plane', 1914)
function sum(a) {
    return function (b) {
        return a + b
    }
}

const wrapperRes = sum(1)
const res = wrapperRes(2)


class Service {
    #baseURL = 'https://jsonplaceholder.typicode.com/'
    getUsers() {
        return fetch(`${this.#baseURL}users`).then(data => data.json())
    }
}

const myService = new Service()
const password = '1334'

if (password !== '1234') {
    throw new Error()
}