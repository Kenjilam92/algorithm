ex1=[3,1,4];
ex2=[5,3,2,4];
ex3=[5, 3, 5, 2, 1];
ex4=[7, 7, 3, 7, 7];
ex5=[1, 1, 7, 6, 6, 6];
// console.log(solution(ex1));
// console.log(solution(ex2));
// console.log(solution(ex3));
// console.log(solution(ex4));
console.log(solution(ex5));


function solution (H,Total=null){
    if(Total===null){
        Total = 0;
    }
    if(H.length === 1){
        Total+= H[0];
        return Total;
    }
    if (H.length === 2 ){
        Total += Areage(H[0],H[1],2,true); 
        return Total;
    }
    let L = H[0];
    let R = H[1];
    let W = 2;
    let i = 2;
    if (L===R){
        var smooth = true;
    }
    else{
        var smooth = false;
    }
    while(i<H.length){
        if (smooth){
            if(R===H[i]){
                W++;
                i++;
            }
            else if (R<H[i]){
                Total+=Areage(L,R,W,true);
                console.log("smooth: ",Total);
                return solution(H.slice(i,H.length),Total);
            }
            else {
                W++;
                i++;
                smooth=false;
            }
        }
        else{
            if (L<R){
                if (R=H[i]){//notice
                    i++;
                    W++;
                }
                else{
                    Total+=Areage(L,R,W,true);
                    console.log("L<R: ",Total);
                    return solution(H.slice(i,H.length),Total);
                }
            }
            else {               
                if(R>=H[i]){
                    i++;
                    W++;
                }
                else if(L==H[i]){
                    W++;
                    Total+=Areage(L,R,W,true);
                    console.log("L>j<R: ",Total);
                    return solution(H.slice(i+1,H.length),Total);
                }
                else if(L>H[i]){
                    R=H[i];
                    Total+=Areage(L,R,W,false);
                    console.log("R<H[i] & H[i]< L: ",Total);
                    return solution(H.slice(i,H.length),Total);
                }
                else {
                    Total+=Areage(L,R,W,true);
                    console.log("R<L<H[i]: ",Total);
                    return solution(H.slice((i),H.length),Total);
                }
            }
        }
    }

    console.log("end of the line",Total);
    Total+=Areage(L,R,W,true);
    return Total;
}

function Areage (l,r,w,useMax){
    let result = 0;
    if (l===r){
        result+= l*w;
    }
    else if (useMax){
        if (l < r ){
            result+= r*w;
        }
        else{
            result+=l*w;
        }
    }
    else{
        if (l < r ){
            result+= (l*w)+(r-l);
        }
        else{
            result+=(r*w)+(l-r);
        }
    }
    return result;
}
