function combineArrays(arr1, arr2){
    let idx1 = 0,
        idx2 = 0,
        output = [];
    while( idx1 < arr1.length && idx2 < arr2.length){
        if( arr1[idx1] < arr2[idx2]){
            output.push(arr1[idx1]);
            idx1 ++;
        }
        else if( arr2[idx2] < arr1[idx1]){
            output.push(arr2[idx2]);
            idx2 ++;
        }
    }
    for(;idx1< arr1.length; idx1++){
        output.push(arr1[idx1]);
    }
    for(; idx2< arr2.length; idx2++){
        output.push(arr2[idx2]);
    }
    return output;
    // return output.concat(arr1.slice(idx1), arr2.slice(idx2));
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let arr1 = arr.slice(0,Math.floor(arr.length/2));
    let arr2 = arr.slice(Math.floor(arr.length/2));

    return combineArrays(
        mergeSort(arr1),mergeSort(arr2)
    );
}