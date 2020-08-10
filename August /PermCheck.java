// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        Heap temp = new Heap();
        for (int i=0; i<A.length; i++){
            temp.insert(A[i]);
        }
        int count = 1;
        int previous = temp.remove();
        while (temp.List.size()>1){
            if (previous == temp.List.get(1) || previous == temp.List.get(1) - 1){
                previous = temp.remove();
            }
            else{
                return 0;
            }
        };
        return 1;
    }
    
}
class Heap {
    ArrayList<Integer> List;
    public Heap (){
        List = new ArrayList<Integer>();
        List.add(null);
    }
    public void insert (int num){
        List.add(num);
        int n = List.size() - 1;
        while(n>1){
            int p = n/2;
            if (List.get(p) > List.get(n) ){
                Collections.swap(List,p,n);
                n = p;
            }
            else{
                break;
            }
        }
    }
    public int remove (){
        int temp = this.List.get(1);
        int n = 1;
        Collections.swap(List, n, this.List.size()-1);
    
        List.remove(List.size()-1);
        
        while( n < (int) List.size()){
            int c1 = 2*n;
            int c2 = (2*n) + 1;
            int p = List.get(n);
            int a = 0;
            int b = 0;
            if (c1 < List.size() ){
                a = List.get(c1);
            }
            else {
                a = p;
            }
            
            if (c2 < List.size() ){
                b = List.get(c2);
            }  
            else {
                b = p;
            }
           
                
            
            if ( p >a && p > b ) {
                if ( a > b ) {
                    Collections.swap(List, n, c2);
                    n = c2;
                }
                else {
                    Collections.swap(List, n, c1);
                    n = c1;
                }
            }
            else if ( p > a ) {
                Collections.swap(List, n, c1);
                n = c1;
            }
            else if ( p > b ) {
                Collections.swap(List, n, c2);
                n = c2;
            }
            else{
                break;
            }
        }
        return temp;
    }
    
}