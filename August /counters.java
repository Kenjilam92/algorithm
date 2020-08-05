// you can also use imports, for example:
import java.util.*;
import java.util.stream.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int[] solution(int N, int[] A) {
        // write your code in Java SE 8
        int [] counters = new int[N];
        for (int i=0; i<counters.length; i++){
            counters[i]= 0;
        }
        int max = 1;
        for (int i =0 ; i< A.length; i++){
            if ( A[i] > N){
                maxCounter(counters, max);
            }
            else {
                counters[A[i] - 1]++;
                if (counters[A[i] - 1] > max){
                    max = counters[A[i] - 1];
                }
            }
            // List<Integer> temp = Arrays.stream(counters).boxed().collect(Collectors.toList());
            // System.out.println(temp);
        }
        return counters;
    }
    
    // public int[] increase( int[] counters , int X){
    //     counters[X]++;
    //     return counters;
    // }
    public int[] maxCounter ( int[] counters, int max){
        for (int i = 0 ; i< counters.length ; i++){
            counters[i] = max;
        }
        return counters;
    }
}