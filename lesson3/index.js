// Functions - Функции
// Глабальная область видимости
var people = [// Meerim1
    {
        name: 'Adilet',
        salary: 23000,
    },
    {
        name: 'Airas',
        salary: 50000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000,
        age: 18,
    },
    {
        name: 'Meerim1',
        salary: 38000
    },
    {
        name: 'Meerim2',
        salary: 38000
    },
    {
        name: 'Meerim3',
        salary: 38000
    },
    {
        name: 'Meerim4',
        salary: 38000
    },
    {
        name: 'Meerim5',
        salary: 38000
    },
]

//                arguments
function increase(name, sum) {
    for (var i = 0; i < people.length; i++) {
        if (people[i].name === name) {
            people[i].salary += sum
        }
    }
}


increase('Meerim1', 1000)
increase('Syimyk', 5000)


console.log(people)
// method
// people[5] = {
//     name: 'Firdavs',
//     salary: 290000
// }




var cat = {
    // method
    sayHello: function () {
        console.log('Say mey')
        increaseSalaries()
    },
    name: 'Cat'
}

// cat.sayHello()


// sayHello()
// console.log(window)
console.log(people)
people.push({name: 'Firdavs', salary: 290000})

var variable // undefined

// function declaration
function increaseSalaries() {
    // Отдельная область видимости
    var test = 'test'
    console.log('begin')
    for (var i = 0; i < people.length; i++) {
        people[i].salary += 1000
        if (people[i].name === 'Nurdin') {
            people[i].salary += 1000
        }
    }
     /// ......
}


// function expression
var testFunc = function () {

}



// increaseSalaries()
// increaseSalaries()


// console.log(people)