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
        // Tries temp = new Tries();
        HashMap<String, Integer> temp = new HashMap<String, Integer>();

        for ( String[] input : queries ){

            if ( input[0].equals("add") ){
                
                for ( int i=0; i <= input[1].length(); i++){
                    String value = input[1].substring(0,i);
                    if (!temp.containsKey(value)){
                        temp.put(value,1);
                    }
                    else{
                        Integer count = temp.get(value) + 1;
                        temp.replace(value, count);
                    }
                }
            }
            else if (input[0].equals("find") ){
                 
                if (temp.containsKey(input[1])){
                    Integer count = temp.get(input[1]);
                    result.add(count);
                }
                else{
                    result.add(0);
                }
            }
        }
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
