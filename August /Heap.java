// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        int[] temp = sortHeap(A);
        int min = 1; 
        for (int i=0; i<temp.length; i++){
            if (temp[i]==min){
                min++;
            }
            else if(temp[i]>0 && temp[i]>min){
                break;
            }
        }
        
        return min;
    }
    public int[] sortHeap(int[] A){
        Heap temp = new Heap();
        for( int i=0; i<A.length ; i++){
            temp.add(A[i]);
        }
        int[] B = new int[A.length];
        for ( int i=0; i < A.length ; i++){
            
            B[i]=temp.removeFirst();
            
        }
        return B;
    }
}




class Heap {
    public ArrayList<Integer> List;
    
    public Heap (){
        List = new ArrayList<Integer> ();
        List.add(null);
    }
    public void add (int num) {
        this.List.add(num);
        int n = this.List.size()-1;
        while (n>1){
            int p = n/2;
            if (this.List.get(p)>this.List.get(n)){
                 Collections.swap(this.List, p, n);
                 n=p;
            }
            else{
                break;
            }
        }
    }
    public int removeFirst (){
        int temp = this.List.get(1);
        int n = 1;
        Collections.swap(this.List, n, this.List.size()-1);
    
        this.List.remove(this.List.size()-1);
        
        while( n < (int)this.List.size()){
            int c1 = 2*n;
            int c2 = (2*n) + 1;
            int p = this.List.get(n);
            int a = 0;
            int b = 0;
            if (c1 < this.List.size() ){
                a = this.List.get(c1);
            }
            else {
                a = p;
            }
            
            if (c2 < this.List.size() ){
                b = this.List.get(c2);
            }  
            else {
                b = p;
            }
           
                
            
            if ( p >a && p > b ) {
                if ( a > b ) {
                    Collections.swap(this.List, n, c2);
                    n = c2;
                }
                else {
                    Collections.swap(this.List, n, c1);
                    n = c1;
                }
            }
            else if ( p > a ) {
                Collections.swap(this.List, n, c1);
                n = c1;
            }
            else if ( p > b ) {
                Collections.swap(this.List, n, c2);
                n = c2;
            }
            else{
                break;
            }
        }
        return temp;
    }
}