**Q1 - Palindrome Linked List**

```java
/**
 * Main
 */
public class Main {
    static boolean isPalindrome(LinkedList<Integer> ll) {
        Stack<Integer> s = new Stack<>();
        int n=ll.size();
        for(int i=0; i<n/2; i++) {
            s.push(ll.removeFirst());
        }
        if(n%2!=0)
            ll.removeFirst();

        while(! s.isEmpty()) {
            if (s.pop() != ll.removeFirst()) {
                return false;
            }
        }
        return s.size()==0;
    }
    public static void main(String[] args) {
        LinkedList<Integer> ll = new LinkedList<>();
        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(2);
        ll.addLast(1);
        System.out.println(isPalindrome(ll));
        // System.out.println(ll);
        // System.out.println(ll.size());
    }
}
```

**Decode the string**

```java
public class Solution {
    public String decodeString(String s) {
        String res = "";
        Stack<Integer> countStack = new Stack<>();
        Stack<String> resStack = new Stack<>();
        int idx = 0;
        while (idx < s.length()) {
            if (Character.isDigit(s.charAt(idx))) {
                int count = 0;
                while (Character.isDigit(s.charAt(idx))) {
                    count = 10 * count + (s.charAt(idx) - '0');
                    idx++;
                }
                countStack.push(count);
            }
            else if (s.charAt(idx) == '[') {
                resStack.push(res);
                res = "";
                idx++;
            }
            else if (s.charAt(idx) == ']') {
                StringBuilder temp = new StringBuilder (resStack.pop());
                int repeatTimes = countStack.pop();
                for (int i = 0; i < repeatTimes; i++) {
                    temp.append(res);
                }
                res = temp.toString();
                idx++;
            }
            else {
                res += s.charAt(idx++);
            }
        }
        return res;
    }
}
```
