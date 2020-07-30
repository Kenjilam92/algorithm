function partition(arr, low, high) {
    var mid = Math.floor((high + low) / 2);
    var pivot = arr[mid];
    while(low < high) {
      if(arr[low] < pivot) {
        low++;
      } else if(arr[high] > pivot) {
        high--;
      } else {
        [arr[high], arr[low]] = [arr[low], arr[high]];
      }
    }
    return low;
  }
  
  function quickSort(arr, low=0, high=arr.length-1) {
    if(low < high) {
      const pI = partition(arr, low, high);
      quickSort(arr, low, pI-1);
      quickSort(arr, pI+1, high);
    }
  }
  
  const arr = [4, 5, 2, 1, 3];
  quickSort(arr);
  console.log(arr);