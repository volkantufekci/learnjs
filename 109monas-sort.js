function numberOfSwaps(array) {
    let swapCount = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swapCount++;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return swapCount;
}

console.log(numberOfSwaps([5,4,3]));
console.log(numberOfSwaps([1,3,4,5]));
console.log(numberOfSwaps([5,4,3,2]));