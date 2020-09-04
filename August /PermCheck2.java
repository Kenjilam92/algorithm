// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        ArrayList<Integer> temp = new ArrayList<Integer>();
        for (int i=0; i< A.length; i++ ){
            temp.add(i+1);
        }
        for (int i=0; i < A.length; i++){
            if (A[i] > A.length){
                return 0;
            }
            else {
                try{
                    temp.remove(new Integer(A[i]));
                }
                catch (Exception e){
                    // System.out.println(e);
                    return 0;
                }
            }
        }
        if (temp.isEmpty()){
            return 1;
        }
        return 0;
    }
}