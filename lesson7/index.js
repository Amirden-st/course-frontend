// ООП, Структурное программирование, Функ. программирование
// ES 6


class User {

    id = 1
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    testMethod() {
        this.#printPassword()
    }

    #printPassword() {
        console.log(this.password)
    }
}


const user = new User('Adi', '0600')
user.testMethod()


// Абстракция, Наследование, Инкапсуляция, Полиморфизм
class Animal {
    constructor(height, weight, voice) {
        this.height = height
        this.weight = weight
        this.voice = voice
    }

    makeVoice() {
        console.log(this.voice)
    }

    run() {
        console.log('rug')
    }
}

class Bird extends Animal {
    makeVoice() {
        console.log('Чирик!')
    }
}


class Cat extends Animal {

}

class Dog extends Animal {
    // атрибуты, св-во, поля
    name = 'John'

    constructor(height, weight, voice, hasOwner) {
        super(height, weight, voice);
        this.hasOwner = hasOwner
    }

    makeVoice() {
        super.makeVoice();
    }

    gav() {
        console.log('Гав')
    }
}


class Buldog extends Dog {

}


class Hero {
    constructor(health, damage) {
        this.health = health
        this.damage = damage
    }

    attack(enemy) {
        enemy.health -= this.damage
    }
}


const hero1 = new Hero(100, 20)
const hero2 = new Hero(100, 20)

hero1.attack(hero2)
hero1.attack(hero2)
hero2.attack(hero1)
console.log(hero1.health, 'hero1')
console.log(hero2.health, 'hero2')
const myDog = new Dog(100, 50, 'mey', true)

myDog.makeVoice()

console.log(myDog, 'myDOg')
const myBuldog = new Buldog(40, 15, 'gav')

console.log(myBuldog.name)


class Person {
    // this - создающийся объект
    constructor(name, salary, color) {
        this.name = name
        this.salary = salary
        this.eyeColor = color
    }

    convertFunc() {
        return this.salary / 84
    }
}

const personObj = new Person('Adi', 55000)
const personObj1 = new Person('Nurgazy', 43111)


const salaryIn$ = personObj.convertFunc()

console.log(personObj)
console.log(personObj1.convertFunc())


const person = {
    name: 'Adi',
    salary: 55000
}
const person1 = {
    //...
}



const name = prompt('Name:')



console.log("eakjdlpksovsk\ndawdaw")

console.log(`Привет, ${name}!`)