function summarize(arr){
    for(var i=0; i<arr.length; i++)
    {
        var sum = arr[i][0];
        var min = arr[i][0];
        var max = arr[i][0];
        for(var j=1; j<arr[i].length; j++)    {
           if(arr[i][j] < min){
              min = arr[i][j];
           }
           else if(arr[i][j] > max){
              max = arr[i][j];
           }
           sum += arr[i][j];
        }
        arr[i] = [min, max, sum];
    }
    return arr[0];
 }
 var x = [ [3,2,1,5,4],
       [6,3,5,2,1],
       [2,6,1,6,7] ];
 var a = summarize(x);
 console.log(a);