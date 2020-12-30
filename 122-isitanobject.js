function isObject(arg) {
    // return typeof arg === 'object'

    // The Object constructor creates an object wrapper
    // for the given value. If the value is null or undefined,
    // it will create and return an empty object, otherwise,
    // it will return an object of a type that corresponds to
    // the given value. If the value is an object already, it will return the value.
    return arg === Object(arg)
}

console.log(isObject(function (x, y) {
    return x + y
}));
console.log(isObject(new RegExp("^[a-zA-Z0-9]+", "g")))
console.log(isObject(null))
console.log(isObject(""))