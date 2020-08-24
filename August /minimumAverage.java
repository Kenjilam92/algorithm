// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        double minAverage= average(A);
        int start = 0;
        int end = A.length-1;
        for (int i=A.length; i>1; i--){
            int j=0;
            while(j<A.length-i){
                if (minAverage > average( slice(A,j,j+i) ) ){
                    minAverage = average( slice(A,j,j+i) ) ;
                    start = j;
                    // end = i + j;
                    // System.out.println("S"+j+"E"+i);
                }
                j++;
            }
        }
        return start;
    }
    public int sum (int[] A){
        int sum =0;
        for (int i =0; i<A.length; i++ ){
            sum+=A[i];
        }
        return sum;
    }
    
    public double average (int[] A){
        return (double) sum(A)/A.length;
    }
    
    public int[] slice (int[] A, int start, int end){
        int[] newArray = new int[end-start+1];
        for (int i = 0; i<=end-start; i++){
            newArray[i]= A[i+start];
        }
        return newArray;
    }
}