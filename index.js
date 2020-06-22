// Add your functions here

function map(arr, func) {
    let newarr = []
    for(let i = 0; i < arr.length; i++) {
        newarr.push(func(arr[i]))
    }
    return newarr
}

function reduce(arr, func, accumulator) {
    let newarr = []
    let i = 0;
    if (accumulator === undefined) {
        accumulator = arr[0]
        i = 1
    }
    for(i; i < arr.length; i++) {
        accumulator = func(arr[i], accumulator)
    }
    return accumulator
}