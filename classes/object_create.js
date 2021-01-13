// https://www.javascripttutorial.net/javascript-factory-functions/
// Object.create(proto, [propertiesObject])

// Although the factory pattern can create multiple similar objects,
// it doesn’t allow you to identify the type of object it creates

const behavior = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

function createPerson(firstName, lastName) {
    let person = Object.create(behavior);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
}

p = createPerson('hede', 'hodo')
console.log(p.getFullName())