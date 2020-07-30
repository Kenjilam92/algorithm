const binStr2Val = str => {
    if (str[0]==='0' && str[1]==='b'){
      var value = 0;
      var power = 0
      let i = str.length-1
      while (str[i] !== 'b'){
        if (str[i]!=='1' && str[i] !=="0"){
          return ('this is not binary!')
        }
        else{
          value+= Math.pow(2,power) * str[i];
        }
        power++;
        i--;
      }      
      return value;
    }
    else{
      return false
    }
  }; 
  // console.log(binStr2Val('0b1010101'));
  // console.log(binStr2Val('0b1010111'));
  
  // const num2binStr = (num,powerArray=null) => {
  //   // if (powerArray === null){
  //   //   powerArray = []
  //   // } 
  //   if (num === 0 || num===1){
  //     return powerArray;
  //   }
  //   // else if(num===1){
  //   //   powerArray.push(2)
  
  //   // }
  //   var power = 0;
  //   while (Math.pow(2,power)<num){
  //     power++;
  //   }
  //   powerArray.push(power-1);
  //   var left_over= num - (Math.pow(2,power-1));
  //   console.log(left_over)
  //    num2binStr (left_over,powerArray)
  // }
  
  // console.log(num2binStr(85))
  
  // divide by 2
  // string += remainder
  //  recursion?
  
  // 85 = 2^6 + 21
  // 21 = 2^4 + 5
  // 5  = 2^2 + 1
  // 2^6 + 2^4 + 2^2 + 2^0
  // 1010101
  
  function decToBin(num){
      let strBit = "";
      while(num > 0){
          num /= 2;
          let rem = num - Math.floor(num);
          if(rem > 0){
              strBit = "1" + strBit;
          }
          else{
              strBit = "0" + strBit;
          }
          num = Math.floor(num);
      }
      return "0b" + strBit;
  }
  
  console.log(decToBin(255)); 
  
  