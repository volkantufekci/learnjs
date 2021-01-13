function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName
        }
    }
}

p = createPerson('volkan', 'tufekci')
console.log(p.getFullName())