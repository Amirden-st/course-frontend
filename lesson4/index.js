// return
function square(a) {
    return a * a
}

var mySquare = square(5)

console.log(mySquare)


function countChar(str, subStr, str1) {
    console.log(str)
    console.log(subStr)
    console.log(str1)
    // var counter = 0
    // for (var i = 0; i < str.length; i++) {
    //     if (str[i] === subStr) {
    //         counter++
    //     }
    // }
    // // console.log(counter)
    // return counter
}


countChar('dadw', 'edaed', 'dadead')

function code () {
    console.log('Кодить')
}

var programmer = {
    level: 'junion',
    code: function () {
        console.log('Кодить')
    }
}

function isEven(num) {
    var even = num % 2 === 0
    if (even) {
        return true
    } else {
        return false
    }
}

function multiply(num) {
    return num * 2
}

function add(sum, num) {
    return sum + num
}

programmer.code()

var array = [1, 2, 3, 54, 546, 2389, 23, 54, 1]
console.log(array)
// map, filter, reduce
// Функция, которая передаётся как аргумент или возвращается другой функцией
// назыввается callback-ом
var массивСЧётными = array.filter(isEven)
function filter(arr, callback) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filter(array, isEven))


var multiplied = array.map(multiply)
// console.log(массивСЧётными)
var reduced = array.reduce(add)
function reduce(arr, callback) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = callback(sum, arr[i])
    }
    return sum
}
console.log(reduce(array, add))


var blueSquare = document.getElementById('square')
blueSquare.style.background = 'red'

