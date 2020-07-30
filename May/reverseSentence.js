const stringtoarray = (string) => {
    let tempString="";
    let tempArray=[];
    for (let i in string){
      if (string[i]===" " && string[i+1]!=" "){
      tempArray.push(tempString);
      tempString=""
      }
      else if (i==(string.length-1)){
      tempString= tempString+ string[i]
      tempArray.push(tempString);
      tempString=""
      }
      else{
      tempString= tempString+ string[i]
      }
    }
    return tempArray;
  }
  const reverseArrayAndTurnToString = (arr) =>{
    let tempString="";
    for ( let i= arr.length-1; i>=0; i--){
    tempString= tempString + " " + arr[i];
    }
    return tempString;
  }  
  
  
  str="hello world,  what a nice day!"

  console.log(stringtoarray(str))
  console.log(reverseArrayAndTurnToString(stringtoarray(str)))