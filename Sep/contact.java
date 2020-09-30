import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the contacts function below.
     */
    static ArrayList<Integer> contacts(String[][] queries) {
        /*
         * Write your code here.
         */
        ArrayList<Integer> result = new ArrayList<Integer>();
        Tries temp = new Tries();
        for ( String[] input : queries ){

            if ( input[0].equals("add") ){
                // System.out.print( input[1] );
                temp.insert( input[1] );
            }
            else if (input[0].equals("find") ){
                TriNode sellect = temp.findNode( input[0] );
                if (sellect == null){
                    System.out.println("not found");
                    result.add(0);
                }
                else{
                    System.out.println(sellect.value);
                    result.add(sellect.count);
                }
            }
        }
        // System.out.println(temp.Root.count);

        return result;
        
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int queriesRows = Integer.parseInt(scanner.nextLine().trim());

        String[][] queries = new String[queriesRows][2];

        for (int queriesRowItr = 0; queriesRowItr < queriesRows; queriesRowItr++) {
            String[] queriesRowItems = scanner.nextLine().split(" ");

            for (int queriesColumnItr = 0; queriesColumnItr < 2; queriesColumnItr++) {
                String queriesItem = queriesRowItems[queriesColumnItr];
                queries[queriesRowItr][queriesColumnItr] = queriesItem;
            }
        }

        ArrayList<Integer> result = contacts(queries);

        for (int resultItr = 0; resultItr < result.size(); resultItr++) {
            bufferedWriter.write(String.valueOf(result.get(resultItr)));

            if (resultItr != result.size() - 1) {
                bufferedWriter.write("\n");
            }
        }

        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}

class TriNode {
    public String value;
    public boolean isWord;
    public int count;
    public HashMap<Character, TriNode> child; 
    public TriNode (String S){
        value = S;
        isWord = false;
        count = 0;
        child = new HashMap<Character, TriNode>();
    }  
}

class Tries {
    public TriNode Root = new TriNode("");
    public void insert ( String  S){
        TriNode runner = Root;
        String currentValue= "";
        for (Character c: S.toCharArray() ){
            currentValue += c;
            if( !runner.child.containsKey(c)){
                runner.child.put(c , new TriNode(currentValue) );
            }
            runner = runner.child.get(c);
        }
        runner.count++;
        runner.isWord = true;
    }
    public TriNode findNode (String S){
        TriNode runner = Root;
        String currentValue="";
        for ( Character letter : S.toCharArray() ){
            currentValue += letter;
            if ( !runner.child.containsKey(letter) ){
                return null; 
            }
            runner = runner.child.get(letter);
        }
        return runner;
    }



}