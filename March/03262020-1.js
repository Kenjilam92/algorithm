// Push front
var arr = [2, 3, 4]
var val = 1

function pushFront(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i]
    }
    arr[0] = val
    return arr
}

console.log(pushFront(arr, val))

// Pop front
arr1 = [1, 2, 3, 4]

function popFront(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
    }
    arr.pop()
    return arr
}

console.log(popFront(arr1))