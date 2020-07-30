function mergesortArr(arr1,arr2){
    if (arr1.length > arr2.length){
      var l= arr1;
      var s= arr2; 
    }
    else{
      var s=arr1;
      var l=arr2;
    }
  
    let newArr = [];
    let i = 0;
    let j = 0;
    while(j < s.length ){
      if (l[i] > s[j]) {
        newArr.push(s[j]);
        j++;
      }
      else{
        newArr.push(l[i]);
        i++;
      }
    }
    while(i < l.length) {
      newArr.push(l[i]);
      i++;
    }
    return newArr;
  }
  
  console.log(mergesortArr([1,9,10,15],[2,4,6,8,12,20]));
  