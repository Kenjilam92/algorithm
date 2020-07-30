function removeNegatives(arr){
    4	    for(var i=0; i<arr.length; i++){
    5	       if(arr[i] < 0) {
    6	           arr[i] = arr.pop();
    7	           i--;
    8	       }
    9	    }
    10	    return arr;