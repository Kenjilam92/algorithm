// you can also use imports, for example:
import java.util.*;
import java.util.stream.*;
// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        ArrayList<Integer> temp = ArrayToArrayList(A);
        for( int i=0; i<A.length; i++){
            try{
                temp.remove(new Integer(i+1));
            }
            catch (Exception e){
                return 0;   
            }
        }
        if (temp.isEmpty()){
            return 1;
        }
        return 0;
    }
    public ArrayList<Integer> ArrayToArrayList (int[] primes){
        List<Integer> list = IntStream.of(primes).boxed().collect(Collectors.toList());
        ArrayList<Integer> arraylist = new ArrayList<>(list);
        return arraylist;
    }
}