import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);
        int lines = scanner.nextInt();
        String temp1= String.valueOf(scanner.next());
        ArrayList<String> group = new ArrayList<String>();
        group.add(temp1);
        boolean Stream =true;
        for (int index = 1; index< lines; index++ ){
            String temp2= String.valueOf(scanner.next());
            if (temp1.contains(temp2) || temp2.contains(temp1) || checkPrefix(temp2,group)){
                System.out.println("BAD SET");
                System.out.println(temp2);
                Stream =false;
                break;
            }
            group.add(temp2);
            temp1= temp2;
        }
        if (Stream){
            System.out.println("GOOD SET");
        }
        scanner.close();
    }

    public static boolean checkPrefix( String text, ArrayList<String> group){
        if (group.contains(text)){
            return true;
        }
        for (int i=0; i < group.size(); i++){
            String temp = group.get(i);
            if(temp.contains(text)){
                return true;
            }
        }
        return false;
    }
}
