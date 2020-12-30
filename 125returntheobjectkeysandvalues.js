function keysAndValues(dict) {
    let keys = Object.keys(dict).sort()
    let values = []
    for (let key in dict) {
        if (dict.hasOwnProperty(key)){
            values.push(dict[key])
        }
    }

    let result = []
    result.push(keys)
    result.push(values)

    return result
}

console.log(keysAndValues({a:1, b:2, c:3}))
console.log(keysAndValues({a:"Apple", b:"Microsoft", c:"Google"}))
console.log(keysAndValues({key1: true, key2: false, key3: undefined}))