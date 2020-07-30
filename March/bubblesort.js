function sort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) { 
      for (var j = 0; j < (length - i - 1); j++) { 
        if(items[j] > items[j+1]) {
          var tmp = items[j];  //Temporary variable to hold the current number
          items[j] = items[j+1]; //Replace current number with adjacent number
          items[j+1] = tmp; //Replace adjacent number with current number
        }
      }        
    }
    return items;
  }

c= sort([3,5,2,1]);
console.log(c);