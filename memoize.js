function memoize (f){
    const cache = new Map();
    return function(...args){
        let key = args.length + args.join('+');
        if (cache.has(key)){
            return cache.get(key);
        }
        else {
            let result = f.apply(this, args);
            cache.set(key,result);
            return result;
        }
    }
}
const factorial = memoize(function (n){ return (n <=1 ? 1: n*factorial(n-1));});
// let resultOf3 = factorial(3);
// console.log(resultOf3);
let resultOf4 = factorial(10);
console.log(resultOf4);