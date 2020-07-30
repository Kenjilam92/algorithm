// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = H[0]
    let max2nd = 0

    let tempMax =0
    let a = 0
    let b = 0

    let result = 0
    for (i=1; i<H.length; i++ ){
        if (H[i]>max){
            max2nd = max;
            b=a
            max = H[i];
            a=i;
        }
        else if( H[i] >= max2nd){
            max2nd = H[i];
            b=i;
        }
    }
    
    if (a===0 || a === H.length-1){
        if (b=== 0 || b === H.length-1){
            let tempMax = 
            result+= max
            result+= max2nd * (H.length-1)
        }
        else if (a<b) {
            tempMax=H[b+1];
            for (i=b+1; i<H.length-1;i++){
                if( H[i]>tempMax){
                    tempMax = H[i]
                }
            }
            result += max * (b+1)
            result += tempMax * (H.length-1-b)
        }
        else if (b<a) {
            tempMax= H[b-1];
            for (i=b-1; i<=0;i--){
                if( H[i]>tempMax){
                    tempMax = H[i]
                }
            }
            result += max * (H.length-1-b)
            result += tempMax * b
        }
    }
    else {
        if (a<b){
            tempMax = H[a-1]
            for (i=a-1; i>=0; i--){
                if(tempMax< H[i]){
                    temMax = H[i]
                }
            }
            result+= tempMax * a
            result+= max * (H.length-a)
        }
        if (b<a){
            tempMax = H[a+1]
            for (i=a+1; i<H.length; i++){
                if(tempMax< H[i]){
                    temMax = H[i]
                }
            }
            result+= tempMax * (H.length-a) 
            result+= max * a
        }
    }
    return result;
    
}
