import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

class Node {
    public double value;
    public Node next;
    public Node ( double n){
        value = n;
        next = null;
    }
}
class SLL {
    public Node Head;
    public int NumberOfNodes;
    public SLL (){
        NumberOfNodes = 0;
    }
    public void add (double n){
        Node newNode = new Node (n);
        if ( Head == null){
            Head = newNode;
            NumberOfNodes++;
        }
        else {
            Node runner = Head;
            Node previous = runner;
            while ( runner.next != null ){
                if (runner.value >= n){
                    break;
                }
                previous = runner;
                runner= runner.next;
            }
            if (runner == Head && Head.value > n){
                Head = newNode;
                Head.next = runner;
            }
            else if (runner.next == null){
                if (runner.value <= n ){
                    runner.next = newNode;
                }
                else {
                    newNode.next= runner;
                    previous.next= newNode;
                }
            }
            else {
                newNode.next= runner;
                previous.next= newNode;
            }
            NumberOfNodes++;
        }
    }
    public void print(){
        Node runner = Head;
        while (runner != null){
            System.out.print(runner.value+" -> ");
            runner = runner.next;
        }
        System.out.println("Number of Nodes: "+NumberOfNodes);
    }

    public double get( int index){
        Node runner = Head;
        int i = 1;
        while (i < index){
            runner= runner.next;
            i++;
        }
        return runner.value;
    }
}

public class Solution {

    /*
     * Complete the runningMedian function below.
     */
    static double[] runningMedian(int[] a) {
        /*
         * Write your code here.
         */
        double[] result = new double[a.length];
        SLL temp = new SLL();
        for (int i=0; i<a.length; i++){
            temp.add( a[i] );
            // temp.print();
            int midIndex= temp.NumberOfNodes/2;
            if (temp.NumberOfNodes%2==0){
                result[i] = (temp.get(midIndex)+temp.get(midIndex+1))/2;
            }
            else{
                result[i] = temp.get( midIndex + 1 ) ;
            }
        }
        
        return result;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int aCount = Integer.parseInt(scanner.nextLine().trim());

        int[] a = new int[aCount];

        for (int aItr = 0; aItr < aCount; aItr++) {
            int aItem = Integer.parseInt(scanner.nextLine().trim());
            a[aItr] = aItem;
        }

        double[] result = runningMedian(a);

        for (int resultItr = 0; resultItr < result.length; resultItr++) {
            bufferedWriter.write(String.valueOf(result[resultItr]));

            if (resultItr != result.length - 1) {
                bufferedWriter.write("\n");
            }
        }

        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}
