import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        String S = "";
        AmazingS temp = new AmazingS();
        temp.add(S);
        // temp.print();
        Scanner scanner = new Scanner(System.in);
        int myInt = scanner.nextInt();
        
        for (int i=0; i< myInt ; i++){
            // System.out.print (i);
            int t = Integer.parseInt(scanner.next());
            if ( t == 1 ){
                S = append ( scanner.next() , S );
                temp.add(S);
                // temp.print();
            }
            else if ( t == 2 ){
                S = delete ( Integer.parseInt(scanner.next()) , S);
                temp.add(S);
            }
            else if ( t == 3 ){
                print( Integer.parseInt(scanner.next()) , S);
            }
            else if ( t == 4 ){
                S= temp.undo();
            }
            else {
                System.out.println("?");
            }
            // System.out.println ( scanner.next() );
        }
        scanner.close();
    }   
    
        //1. append()
    public static String append( String W, String S ){
        return S+W;
    }  
        //2. delete
    public static String delete (int k, String S){
        for (int i= 0; i<k; i++ ){
            S= S.substring(0, S.length()-1);
            // System.out.println (S);
        }
        return S;
    }
        //3. print
    public static void print ( int k, String S ){
        System.out.println(S.charAt(k-1));
    }
        //4. undo
    // public static String undo ( AmazingS S, String S ){
    //     return S.undo;
    // }
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
            Head= newNode;
        }
        else{
            Node runner = Head;
            while (runner.next != null){
                runner = runner.next;
            }
            runner.next= newNode;
        }
    }
    public String undo() {
        Node runner = Head;
        Node follower = runner;
        while (runner.next != null){
            follower = runner;
            runner = runner.next;
        }
        follower.next = null;
        return follower.value;
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
