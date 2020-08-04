// you can also use imports, for example:
// import java.util.*;
import java.math.*;
// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");


class Node{
    public int Value;
    public Node Left;
    public Node Right;
    public Node(int value){
        Value = value;
    }
}

class BinTree {
    public Node Head;
    public BigInteger Sum = BigInteger.valueOf(0);
    // public BinTree
    
    public void add(int num){
        Node newNode = new Node(num);
        
        if (Head == null){
            Head = newNode;
            Sum = Sum.add(BigInteger.valueOf(num));
        }
        else {
            Node Runner = this.Head;
            while (Runner != null){
                if (Runner.Value > num){
                    if (Runner.Left == null){
                        Runner.Left= newNode;
                        Sum = Sum.add(BigInteger.valueOf(num));
                    }
                    else {
                        Runner = Runner.Left;
                    }
                }
                else if (Runner.Value < num){
                    if (Runner.Right == null){
                        Runner.Right= newNode;
                        Sum = Sum.add(BigInteger.valueOf(num));
                    }
                    else {
                        Runner = Runner.Right;
                    }
                }
                else if (num == (Runner.Value)){
                    break;
                }
            }
        }
    }
}
class Solution {
    public int solution(int X, int[] A) {
        // write your code in Java SE 8
        if (A.length < X){
            return -1;
        }
        BigInteger Sigma = BigInteger.valueOf(X);
        Sigma = Sigma.multiply(BigInteger.valueOf(X + 1));
        Sigma = Sigma.divide(BigInteger.valueOf(2));
        BinTree temp = new BinTree();
        
        for(int i = 0; i<A.length; i++){
            temp.add(A[i]);
            if (Sigma.equals(temp.Sum)){
                return i;
            }
        }
        
        return -1;
    }
}
