function countTrue(array) {
    let count = 0;
    [...array].forEach(function (element) {
        if (element) {
            count++;
        }
    })
    console.log(count)
}

countTrue([true, false, false, true, false])
countTrue([false, false, false])
countTrue([])