var array = [2,3,1,5,7,8]

function sortArr1(arr){
  for (i=1;i<arr.length;i++){

    for (j=i;j>0;j--){
      if (arr[j]<arr[j-1]){
        [arr[j],arr[j-1]]=[arr[j-1],arr[j]]; 
      } else {
        break;
      }
    }
  }
  return arr;
}
console.log(sortarr1(array))

function sortArr2(arr){
    for (var i=1;i < arr.length; i++){
      let j=i;
      while(arr[j] < arr[j-1] && j > 0)
      {
          var temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
          j--;
        }
    }
    return arr;
}
console.log(sortarr2(array))

