const rotateString = (str,number)=>{
    let index= str.length-number;
    let newstring="";
    let i = index;
    let j = 0;
    while (i<str.length){
      newstring= newstring + str[i];
      i++;
      }
    while ( j < index){
      newstring= newstring + str[j];
      j++;
      }
    return newstring;
  }
  console.log(rotateString('HelloWorld',4))
  
  //compare 2 strings, if they are rotateString to each other
  
  const comparingRotation = (str1,str2) =>{ 
    if (str1.length !== str2.length){
      console.log('they are not equal');
      return false;
    }
    else {
     for (i=str1.length,i) 
    } 
  }
  comparingRotation("helloworld","worldhelle")


  //advance 

  function rotateString(str,num){
    num %= str.length;
    var arr = str.split("");
    for(let i = 0; i < num; i++){
        arr.unshift(arr.pop());
    }
    return arr.join("");
}
console.log(rotateString("Hello World",50004));

const isRotation = (str1,str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i <str1.length; i++){
        if(str1 === rotateString(str2,i)){
            return true;
        }
    }
    return false;
}

console.log(isRotation("Bingo","ingtB"));