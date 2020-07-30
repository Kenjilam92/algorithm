// decimal to hexidecimal

const hexidecimal = {
    '0' : 0,
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    'a' : 10,
    'b' : 11,
    'c' : 12,
    'd' : 13,
    'e' : 14,
    'f' : 15
  }
  
  function hex2dec(hex) {
    let result = 0;
    for ( let i = hex.length-1, pv = 0; i>1; i--, pv++) {
      // console.log(result)
      result += Math.pow(16, pv) * hexidecimal[ hex[i] ];
    }
    return result;
  }
  
  
  // console.log(hex2dec("0x1000"));
  
  const getHex = "0123456789abcdef";
  
  
  function dec2hex(dec) {
    let result = "0x";
    let pv = Math.floor(Math.log(dec)/Math.log(16));
    while(pv >= 0) {
      let x = Math.floor(dec/Math.pow(16, pv));
      dec %= Math.pow(16, pv);
      console.log(x);
      result += getHex[x];
      pv--;
    }
    return result;
  }
  
  console.log(dec2hex(300));
  
  console.log(hex2dec('0x12c'))

  ////////////////////////////////////////////

  const hexStr2Val = str => {
    const decode = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    }
    if (str[0]==='0' && str[1]==='x'){
      var value = 0;
      var power = 0
      let i = str.length-1
      while (str[i] !== 'x'){
        if (str[i]==="a" || str[i]==="b" || str[i]==="c" || str[i]==="d" || str[i]==="e" || str[i]==="f"){
          var hexVal = decode[str[i]]        
          value+= Math.pow(16,power) * hexVal;
        }
        else if(!isNaN(str[i])){
          value+= Math.pow(16,power) * str[i];
        }
        else{
          return ('this is not hexanary!')
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
  
  console.log(hexStr2Val('0xa0c1'));
  
  
  //   const encode = {
  //     10: 'a',
  //     11: 'b',
  //     12: 'c',
  //     13: 'd',
  //     14: 'e',
  //     15: 'f'
  //   }
  // const decToHex = num =>{
  //       let strBit = "";
  //       while(num > 0){
  //           num /= 16;
  //           let rem = num - Math.floor(num);
  //           console.log(`rem = ${num}`)
  //           if(rem > 9){
  //               strBit = encode[rem] + strBit;
  //           }
  //           else
  //           if(rem > 0){
  //               strBit = rem + strBit;
  //           }
  //           else{
  //               strBit = "0" + strBit;
  //           }
  //           num = Math.floor(num);
  //       }
  //       return "0x" + strBit;
  //   }
    
  // console.log(decToHex(41153));
  
  
  
  // console.log (41153/16)
  // console.log (2572/16)
  // console.log (160/16)
  
  // const decToHex2 = num =>{
  //       let strHex = "";
  //       var temp = num
  //       while(num > ){ 
  //         while (temp < 16){
  //           temp /=  16;
  //           let rem = temp - Math.floor(temp);
  //           if (rem in encode){
  //             strHex+= encode.rem
  //           }
  //         num /= 16;
  //         num -= Math.floor(num)    
  //         }
  //       }
  //   return "0x" + strHex;
  // }
  
  // console.log(decToHex2(41153));
  