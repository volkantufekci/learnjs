console.log("Average with reduce:")
function averageWithReduce(array) {
    return array.reduce(function (acc, current) {
        return acc + current / array.length
    }, 0);
}

console.log(averageWithReduce([1,2,3]), ` should be 2`)
console.log(averageWithReduce([0,1,2,3]), ` should be 1.5`)
console.log(averageWithReduce([3,3,3]), ` should be 3`)


console.log("\nAverage with reduceRight:")
function averageWithReduceRight(array) {
    return array.reduceRight(function (acc, current) {
        return acc + current / array.length
    }, 0);
}

console.log(averageWithReduceRight([1,2,3]), ` should be 2`)
console.log(averageWithReduceRight([0,1,2,3]), ` should be 1.5`)
console.log(averageWithReduceRight([3,3,3]), ` should be 3`)