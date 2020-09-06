// you can also use imports, for example:
import java.util.*;
import java.util.stream.*;
import java.math.BigInteger;
// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
       
        BigInteger Sigma = BigInteger.valueOf(A.length);
        Sigma = Sigma.multiply( Sigma.add(BigInteger.valueOf(1) ) );
        Sigma = Sigma.divide( BigInteger.valueOf(2));
        // System.out.println(Sigma);
        for (int i=0; i<A.length; i++){
            Sigma = Sigma.subtract( BigInteger.valueOf(A[i]) );
            // System.out.println(Sigma);
        }
        // fastSubstract (Sigma, A, 1);
        
        if ( Sigma.equals(BigInteger.valueOf(0) ) ) {
            return 1;
        }
        return 0;
    }
    // public void fastSubstract (BigInteger Sum, int[]A, int index){
    //     if ( index < A.length){
    //         Sum.subtract( BigInteger.valueOf(A[index]) );    
    //         fastSubstract(Sum,A, 2*index);
    //         fastSubstract(Sum,A, 2*index + 1);
    //     }
    // }
}