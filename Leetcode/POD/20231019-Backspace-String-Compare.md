# Backspace String Compare

## Approach

## Complexity

`Time complexity - O(N)`

`Space Complexity - O(N)`

## Solution

```java
class Solution {
    public boolean backspaceCompare(String s, String t) {
        Stack<Character> stack1=new Stack<>();
        Stack<Character> stack2=new Stack<>();
        
        int n = s.length();

        for(int i=0; i<n; i++) {
            char ch = s.charAt(i);

            if(ch == '#') {
                if(! stack1.isEmpty())
                    stack1.pop();
            }
            else {
                stack1.push(ch);
            }
        }
        n = t.length();
        for(int i=0; i<n; i++) {
            char ch = t.charAt(i);

            if(ch == '#') {
                if(! stack2.isEmpty())
                    stack2.pop();
            }
            else {
                stack2.push(ch);
            }
        }

        if(stack1.size() != stack2.size()) {
            return false;
        }
        return stack1.equals(stack2);
    }
}
```