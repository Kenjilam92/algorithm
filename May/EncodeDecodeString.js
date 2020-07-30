const encodeStr = (str) =>{
    let result=""
    let tempLetter = "";
    let counter = 1;
    let i=0;
    while (i<str.length){
      if (str[i]!==str[i+1]){
        tempLetter=str[i];
        result= result + tempLetter + counter;
        counter = 1;
      }
      else {
        counter++;
      }
    i++;
    }
    if (result.length === str.length){
      console.log("this encoding is not effective for this string")
      return str
    }
    console.log(result);
    return result;
  }
  
  // a = encodeStr("aaaaaannnnneeeeeekkkkk");
  
function is_numeric(str){
    return /^\d+$/.test(str);
}
// console.log("7".repeat(4))

const decode = (str) =>{
  let i=0;
  let tempNumber=""
  let tempLetter=""
  let result=""
  let switchpoint =""
  while(i<str.length){
  if (is_numeric(str[i])) {
    tempNumber+=str[i];
    // console.log(tempNumber)
  }
  else{
    if (tempLetter==""){
      tempLetter=str[i];
    } else {
      swithpoint=str[i];
    }
    // console.log(tempLetter)
  }
  if (tempNumber!=="" && switchpoint!=="") {
    // console.log(tempLetter)
    // console.log(tempNumber)
    result= result + (tempLetter.repeat(parseInt(tempNumber)));
    tempNumber=""
    tempLetter=switchpoint
    switchpoint=""
  }
  i++;  
  }
  console.log(result);
  return result;
}

decode("a16b7c56")

// const encode = (str) => {
//   var encodedStr = ''
//   var currentChar = str[0]
//   var charCount = 1
//   for (let i = 1; i <= str.length; i++) {
//     if (str[i] === currentChar) {
//       charCount++
//     } else {
//       encodedStr += currentChar + String(charCount)
//       charCount = 1
//       currentChar = str[i]
//     }
//   }
//   return encodedStr
// }
// // a4b3c4d1
// console.log(encode('aaaabbbccccd'));
// console.log(encode('bb'));
// // nice :D


// const decode = (str) => {
//   var decodedStr = '';
//   let i = 0
//   let currentChar = ''
//   let repeatBy = ''
//   while (i <= str.length) {
//     if (isNaN(parseInt(str[i]))) {
//       if (repeatBy.length > 0) {
//         for (let j = 0; j < parseInt(repeatBy); j++) {
//           decodedStr += currentChar
//         }
//       }
//       currentChar = str[i]
//       repeatBy = ''
//     } else {
//       repeatBy += str[i]
//     }
//     i++
//   }
  
//   return decodedStr;
// }

// console.log(decode('a4b3c4d1'));
// //:D
// console.log(decode('a10b10c4d1')); 

// //yeah! parseIn
// // this repl is cool -- yep!
// // good job! -- thanks! fun stuff