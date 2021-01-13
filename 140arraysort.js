const arr15 = [5, 1, 4, 2, 8]
for (let i = 0; i < arr15.length - 1; i++) { // hangi sort
    for (let j = i+1; j < arr15.length; j++) {
        if(arr15[i] > arr15[j]) {
            const temp = arr15[i];
            arr15[i] = arr15[j];
            arr15[j] = temp;
        }
        console.log(i, ` `, j, ` `, arr15)
    }
}
console.log(arr15)