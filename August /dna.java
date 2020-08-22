// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int[] solution(String S, int[] P, int[] Q) {
        // write your code in Java SE 8
        HashMap<String,Integer> decode = new HashMap<String,Integer>();
        decode.put("A",1);
        decode.put("C",2);
        decode.put("G",3);
        decode.put("T",4);
        int M = P.length; 
        int[] result = new int[M];
        for (int i = 0; i<M; i++){
            int a = P[i];
            int b = Q[i];
            int min = 5;
            for (int j = a; j<= b; j++){
                int c = decode.get(String.valueOf(S.charAt(j)));
                if (min>c){
                    min = c;
                }
                if (min == 1){
                    break;
                }
            }
            result[i]=min;
            
        }
        return result;
    }
}
