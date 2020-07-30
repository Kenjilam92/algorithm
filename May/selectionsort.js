var arr=[10,5,6,3,2,7]

function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        let min = i;
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr;
}
console.log(selectionSort(arr))