// Prototype
// ES 6
class Class {
    //...
}




let string1 = 'dawrfs'

function printThis() {
    console.log(this)
    // console.log(this.string1, 'str')

}


const myFuncs = {
    printThis,
    innerObj:  function ()  {
        return this
    }
}
// printThis()
// window.printThis()
console.log(myFuncs.innerObj(), '-----innerObj')
// myFuncs.printThis()





class Computer  {

}

console.log(new Computer())
// ES 5
// constructor
function User(name, password) {
    this.name = name
    this.password = password
}

User.prototype.printName = function () {
    console.log(this.name)
}
const user = new User('Adi', 'password')

// -------------
const user1 = {}
User.call(user1, 'Muha', 1234)
user1.__proto__ = User.prototype

console.log(user1, '----user')

function FuncComputer () {

}
// const obj1 = new User('Adi', 'password')
// const obj1 = new User('Adi', 'password')
// const obj1 = new User('Adi', 'password')
// const obj1 = new User('Adi', 'password')
console.log(user.hasOwnProperty('name'))


const sub = document.getElementById('form')
const log = document.getElementById('log')
const pass = document.getElementById('pass')
sub.addEventListener('submit', () => {
    console.log('works')
    alert(log.value)
    alert(pass.value)
})