// Add your functions here

function map(arr, callback) {
    const returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        returnArr.push(callback(arr[i]))
    }
    return returnArr
}

function reduce(arr, callback, accum) {
    let i = 0;
    if (!accum) {
        accum = arr[0]
        i = 1
    }
    for (; i < arr.length; i++) {
        accum = callback(arr[i], accum)
    }
    return accum
}