class minHeap {
    constructor(){
      this.heap = [undefined]
    }
    insert(val){
      this.heap.push(val);
      let n = this.heap.length - 1;
      while(n > 1){
        let p = Math.floor(n/2);
        if(this.heap[n] < this.heap[p]){
          [this.heap[n], this.heap[p]] = [this.heap[p], this.heap[n]]
          n = p;
        }
        else{
          break
        }
      }
    return this;
    }
    remove(){
      let n = 1;
      [this.heap[n], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length- 1], this.heap[n]]
      let toReturn = this.heap.pop();
      while(n < this.heap.length){
        let c1 = 2*n;
        let c2 = 2 * n + 1
        if (this.heap[n] > this.heap[c1] && this.heap[n] > this.heap[c2]) {
          if (this.heap[c1] > this.heap[c2]) {
          [this.heap[n], this.heap[c2]] = [this.heap[c2], this.heap[n]]
          n = c2
          }
        else {
          [this.heap[n], this.heap[c1]] = [this.heap[c1], this.heap[n]]
          n = c1
          }
        }
        else if (this.heap[n] > this.heap[c1]) {
        [this.heap[n], this.heap[c1]] = [this.heap[c1], this.heap[n]]
        n = c1
        }
        else if (this.heap[n] > this.heap[c2]) {
        [this.heap[n], this.heap[c2]] = [this.heap[c2], this.heap[n]]
        n = c2
        }
        else{
          break
        }
      }
      return toReturn;
    }  
  }
  
  // var a = new minHeap;
  // a.insert(2).insert(8).insert(5).insert(7).insert(4).insert(3).insert(9).insert(6).insert(7).insert(2)
  // console.log(a)
  // console.log(a.remove())
  // console.log(a)
  
  const heapSort = (arr) => {
    var heap = new minHeap
    let sortArr = [];
    for (let i = 0; i < arr.length; i++){
    heap.insert(arr[i])
    }
    while (heap.heap.length > 1) {
    sortArr.push(heap.remove());
    }
    // console.log(heap);
    return sortArr;
    }
// var a = new minHeap;
var array = [9,8,7,6,5,4,3,2,1,10,12,14,15,16];

console.log(heapSort(array))