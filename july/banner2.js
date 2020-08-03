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
    if (L===R){
        var smooth = true;
    }
    else {
        var smooth = false;
    }
    while(i<H.length){
        if (smooth){
            if (R===H[i]){
                W++;
                i++;
            }
            else if (R>H[i]){
                W++;
                i++;
                R=H[i];
                smooth = false;
            }
            else { // R<H[i]
                Total+=Calculation(L,R,W);
                return solution(H.slice(i,H.length),Total);
            }
        }
        else if(L>R){
            if (H[i]<=R){
                W++;
                i++;
            }// R<H[i]<=L;
            else if (H[i]<=L){
                R = H[i];
                W++;
                i++;
                Total+=Calculation(L,R,W);
                if (i===H.length){
                    return Total;
                }
                return solution(H.slice(i,H.length),Total);
            }//L<H[i]
            else{
                Total+=CalculationEnd(L,R,W);
                return solution(H.slice(i,H.length),Total);
            }
        }
        else{  //(L<R)
            if(R==H[i]){
                W++;
                i++;
            }
            else if (H[i]<R){
                Total+= Calculation(L,R,W);
                return solution(H.slice(i,H.length),Total);
            }
            else{ // R<H[i]
                W++;
                i++;
            }
        }
    }
    Total+=CalculationEnd(L,R,W);
    return Total;
}

function Calculation(l,r,w){
    if (l === r){
        return l*w;
    }
    else if (l>r){
        return (r*w)+(l-r);
    }
    else{ //r<l
        return (l*w)+(r-l);
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