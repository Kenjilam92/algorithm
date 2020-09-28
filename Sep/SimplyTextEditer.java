import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        String S = "";
        AmazingS temp = new AmazingS();
        Scanner scanner = new Scanner(System.in);
        int myInt = scanner.nextInt();
        
        for (int i=0; i< myInt ; i++){
            int t = Integer.parseInt(scanner.next());
            if ( t == 1 ){
                temp.add(S);
                S = S + scanner.next();
                
            }
            else if ( t == 2 ){
                temp.add(S);
                S = S.substring(0, S.length() - scanner.nextInt() );
            }
            else if ( t == 3 ){
                System.out.println(S.charAt(scanner.nextInt()-1));
            }
            else if ( t == 4 ){
                S= temp.undo();
            }
            else {
                System.out.println("?");
            }
        }
        scanner.close();
    }   
}

class Node{
    public String value;
    public Node next;
    public Node( String S){
        value = S;
        next = null;
    }
}

class AmazingS{
    public Node Head;
    public AmazingS (){
        Head = null;
    }
    public void add (String S){
        Node newNode= new Node(S);
        if (Head == null){
            Head = newNode;
        }
        else{
            newNode.next = Head;
            Head = newNode;
        }
    }
    public String undo() {
        if (Head == null){
            return "";
        }
        Node result = Head;
        Head = result.next;
        result.next = null;
        // this.print();
        return result.value;
    }
    public void print(){
        Node runner = Head;
        // Node follower = runner;
        while (runner.next != null){
            // follower = runner;
            System.out.print(runner.value + "->");
            runner = runner.next;
        }
        System.out.println(runner.value + "->");
    }

}
