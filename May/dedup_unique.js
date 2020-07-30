function uniqueLetters(str) {

  var letters = {};

  for(var i=0; i<str.length; i++){
    if(letters[str[i]]) {
      letters[str[i]]++;
    } else {
      letters[str[i]] = 1;
    }
  }

  var response = "";

  for(var key in letters) {
    if(letters[key] === 1) {
      response += key;
    }
  }

  return response;

}

uniqueLetters("Snap! Crackle! Pop!");

// unique no nested loop

function uniqueLetters(str) {

    var letters = {};
  
    for(var i=0; i<str.length; i++){
      if(letters[str[i]]) {
        letters[str[i]]++;
      } else {
        letters[str[i]] = 1;
      }
    }
  
    var response = "";
  
    for(var key in letters) {
      if(letters[key] === 1) {
        response += key;
      }
    }
  
    return response;
  
  }
  
  uniqueLetters("Snap! Crackle! Pop!");