var myAarray = [1,2,3,4,8,5];

var smallArr = [1,2,3];

function reverseArray(someArray){
    var arrayLength = someArray.length;
    for (var i = 0; i< arrayLength/2; i++){
        var temp = someArray[i]
        someArray[i] = someArray[arrayLength-1-i]
        someArray[arrayLength-1-i] = temp
    }
    return someArray;
} 

reverseArray(myAarray);
reverseArray(smallArr);
console.log(myAarray);
console.log(smallArr);