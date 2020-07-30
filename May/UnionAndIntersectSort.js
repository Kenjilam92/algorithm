// Intersect Sorted Arrays
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].

const intersect = (arr1,arr2)=>{
  let result = [];
  let i=0;
  let j=0;

  while (i<arr1.length && j<arr2.length) {
    if (arr1[i] === arr2[j]){
      result.push(arr1[i])
      i++;
      j++;
    }
    else if (arr1[i]>arr2[j]){
      j++;
    }
    else {
      i++
    }
  } 
  return result 
}

// Union Sorted Arrays
// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].

console.log(intersect([1,2,7],[1,1,2,6,7,8]))

const union = (arr1,arr2)=>{
  let result = [];
  let i=0;
  let j=0;

  while (i<arr1.length && j<arr2.length) {
    if (arr1[i]<arr2[j]){
      result.push(arr1[i]);
      i++;
    }
    else if (arr1[i]>arr2[j]){
      result.push(arr2[j]);
      j++;
    }
    else {
      result.push(arr2[j]);
      i++;
      j++;
    }
  } 
  for (;i<arr1.length;i++){
    result.push(arr1[i]);
  }
  for (;j<arr2.length;j++){
    result.push(arr2[j]);
  }
  return result 
}
console.log(union([1,2,7],[1,1,2,6,7,8]))