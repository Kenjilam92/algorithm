function max(array) {
2	  var max = 0;
3	  for ( var i=0; i<array.length; i++){
4	    if (array[i]>max){
5	      max=array[i];
6	    }
7	  }
8	  return max;
9	}
10	
11	var z=[1,30,5,7];
12	console.log (max(z));