function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

let p = new Person('v', 't')
console.log(p.getFullName())
console.log(p.constructor === Person) //true
console.log(p instanceof Person) //true
console.log(p instanceof Object) //true