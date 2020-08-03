import java.math.BigInteger;

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        BigInteger a = BigInteger.valueOf(A.length + 1);
        BigInteger b = a.add(BigInteger.valueOf(1));
        
        BigInteger Sigma = a.multiply(b);
        Sigma = Sigma.divide(BigInteger.valueOf(2));
        for (int i= 0; i< A.length; i++){
            Sigma = Sigma.subtract(BigInteger.valueOf(A[i]));
        }
        
        return Sigma.intValue();
        
    }
}