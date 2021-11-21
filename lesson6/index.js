// this

var country = {
    name: 'USA',
    population: 360000000,
    langs: ['en', 'fr', 'ru'],
    printName: function () {
        console.log(this.name)
    },
    addLang: function (lang) {
        this.langs.push(lang)
    }
}

// country
country.printName()


// var printName = country.printName


// window
printName()


country.addLang('ch')

console.log(country.langs)


// ECMA Script 5
var variable = 1


// ECMA Script 6

// var
// Function scoping
var varVariable = 'val'
var varVariable = 'val'

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i])
//     var cycleVar = ''
// }
// cycleVar


function testForVar() {
    var funcVar = ''
}


// let

let myLet = 'value'

var nums = [1, 2, 34]

{
    let j = 0
}

// console.log(j) Error

for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    let letVar = ''
}


// letVar Error


// Const
const myConst = 'const'
// myConst = 'new Val' //Error

const strs = ['string', 'string1', 'string2']

strs[0] = 'string0'


// bind, call, apply
// var name = 'Adi'

const student = {
    name: 'Firdavs'
}

//                 параметр
function printName(toLog, toLog1) {
    console.log(toLog)
    console.log(toLog1)
    console.log(this.name)
}

const bindedPrintName = printName.bind(student)

// bindedPrintName()


// printName.apply(student, ['Hello', 'Dear'])

// printName.call(student, 'Hello', 'Dear')


// arrow functions

var country = {
    name: 'USA',
    population: 360000000,
    langs: ['en', 'fr', 'ru'],
    printName: function () {
        console.log(this.name)
    },
    addLang: (lang) => {
        this.langs.push(lang)
    }
}

// country.addLang('ua')
console.log(country.langs)


const addLang = country.addLang

// addLang('kz')

console.log(country.langs)


function sumFunc(a, b) {
    var variable = ''
    return a + b
}

// const sumArrow = (a, b) => {
//     return a + b
// }
const sumArrow = (a, b) => a + b
const arrowPrintName = name => console.log(name)

// console.log(sumFunc(1, 15),
//     sumArrow(1, 15))


// default settings
const reduce = (arr, callback, init = 0) => {
    let sum = init
    for (let i = 0; i < arr.length; i++) {
        sum = callback(sum, arr[i])
    }
    return sum
}

const reduceArr = [12, 3, 1]

console.log(reduce(reduceArr, (sum, val) => sum + val))

// spread operator

const numSum = (...nums) => {
    let sum = 0
    nums.forEach(num => sum += num)
    return sum
}
console.log(numSum(1, 2, 3, 45, 6, 123, 1))
console.log(numSum(1, 2, 3, 45, 6, 123, 1, 12, 12))
console.log(numSum(1, 2, 3, 5, 1, 2, 2, 345, 67, 8, -7, 4, 5, 3, 4))
console.log(numSum(...reduceArr)) // 12, 3, 1


// Destructure
const person = {
    name: 'Nazira',
    course: 'Frontend',
    salary: 0
}


const { name, course } = person

console.log(name)
console.log(name)
console.log(name)

console.log(course)


const convertToDollar = ({ salary, ...rest }) => {
    // оператор отрицания - !
    if (!salary) {
        console.log('Ваша зарплата равна 0!')
        return false
    }
    return {
        ...rest,
        salary: Math.floor(salary / 84.5)
    }
}

console.log(convertToDollar(person))
