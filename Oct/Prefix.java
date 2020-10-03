import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);
        boolean Stream = true;
        int list = scanner.nextInt();
        Tries temp = new Tries();
        temp.add(String.valueOf(scanner.next()));
        for (int i=1; i<list; i++){
            String text = String.valueOf(scanner.next());
            if(temp.checkPrefix(text)){
                System.out.println("BAD SET");
                System.out.println(text);
                Stream = false;
                break;
            }
            else{
                temp.add(text);
            }
        }
        if(Stream){
            System.out.println("GOOD SET");
        }
        scanner.close();
    }
}

class TriNode {
    public String value;
    public boolean isWord = false;
    public HashMap<Character,TriNode> child;
    public TriNode(String text){
        value = text;
        child = new HashMap<Character, TriNode>();
    }
}
class Tries{
    public TriNode Root;
    public Tries(){
        Root = new TriNode(""); 
    }
    public void add(String text){
        String currentValue= "";
        TriNode runner = Root;
        for (Character letter: text.toCharArray() ){
            currentValue+= letter;
            if (!runner.child.containsKey(letter)){
                runner.child.put( letter ,new TriNode(currentValue));
            }
            runner= runner.child.get(letter);
        }
        runner.isWord = true;
    }
    public boolean checkPrefix (String text){
        // String currentValue="";
        TriNode runner = Root;
        for (Character letter: text.toCharArray() ){
            if(runner.child.containsKey(letter)){
                runner = runner.child.get(letter);
            }
            else if(runner.isWord){
                return true;
            }
            else{
                return false;
            }
        }
        return true; 
    }
}
