function solution(H,Total=null) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (Total===null){
        let Total=0;
    }
    if (H.length===1){
        Total+=H[0];
        return Total;
    }
    if (H.length === 2){
       
        Total+=CalculationEnd(H[0],H[1],2);
        
        return Total;
    }
    let L = H[0];
    let R = H[1];
    let W = 2;
    let i = 2;
    let isEqualHead = true;
    if (L===R){
        while(i<H.length){
            
        }
        Total+=CalculationEnd(L,R,W);
        return Total;
    }
    else {
        while (i<H.length){
            if (L>R){
                if (L>H[i]){
                    W++; 
                    i++;
                }
                else if (L===H[i]){
                    W++;
                    if(i=H.length-1){
                        R=H[i];
                        Total += Calculation(L,R,W); 
                        return Total
                    }
                    else if(L!==H[i+1]){
                        R=H[i];
                        i++;
                        Total += Calculation(L,R,W); 
                        return solution(H.slice(i,H.length),Total);
                    }
                }
                else {
                    R=H[i-1];
                    Total+=Calculation(L,R,W);
                    return (H.slice(i,H.length),Total);
                }
            }
            else{//L<R
                if (R<=H[i]){
                    L=R
                    R=H[i];
                    W++;
                    i++;
                }
                else {
                    Total=CalculationEnd(L,R,W);
                    return solution(H.slice(i,H.length),Total);
                }
            }
        }
        Total+=CalculationEnd(L,R,W);
        return Total;
    }
    
}

function Calculation(l,r,w){
    if (l === r){
        return l*w;
    }
    else if (l>r){
        return (l*w)-((w-1)*(l-r));
    }
    else{ //r<l
        return (r*w)-((w-1)*(r-l));
    }
}
function CalculationEnd(l,r,w){
    if (l===r){
        return l*w;
    }
    else if (l>r){
        return l*w;
    }
    else{ //r<l
        return r*w;
    }
}