function prefixWithSomething() {
    return function (str) {
        return "something " + str;
    }
}

giveMeSomething = prefixWithSomething();
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));