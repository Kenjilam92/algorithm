ex1=[3,1,4];
ex2=[5,3,2,4];
ex3=[5, 3, 5, 2, 1];
ex4=[7, 7, 3, 7, 7];
ex5=[1, 1, 7, 6, 6, 6];
ex6=[1,2,3,3,5,2];
ex7=[1,1,2,3,3,5,2];
console.log(solution(ex1));
console.log(solution(ex2));
console.log(solution(ex3));
console.log(solution(ex4));
console.log(solution(ex5));
console.log(solution(ex6));
console.log(solution(ex7));

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
        let EqualGap = 2;
        while(i<H.length){
            if (R===H[i] && L===H[i]){
                W++;
                i++;
                EqualGap++;
            }
            else if(L>H[i]){
                R=H[i];
                W++;
                i++;
            }
            else if (L===H[i]){
                W++;
                if(i===H.length-1){
                    R=H[i];
                    Total += Calculation(L,R,W); 
                    return Total;
                }
                else if(L!==H[i+1]){
                    R=H[i];
                    i++;
                    Total += Calculation(L,R,W); 
                    return solution(H.slice(i,H.length),Total);
                }
                i++;
            }
            else {
                Total+=L*W;
                return solution(H.slice(i,H.length),Total);
            }
        }
        Total+=CalculationEnd(L,R,W);
        return Total;
    }
    else if (L>R){
        
        while (i<H.length){
            
           
        }
        
        Total+=Calculation(L,R,W);
        return Total;
    }
    else{//L<R
        while(i<H.length){
            if (R<=H[i]){
                R=H[i];
                W++;
                i++;
            }
            else {
                Total=CalculationEnd(L,R,W);
                return solution(H.slice(i,H.length),Total);
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