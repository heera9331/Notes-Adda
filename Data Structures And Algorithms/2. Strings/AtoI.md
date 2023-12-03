# Implements atoi function

Your task  is to implement the function **atoi**. The function takes a string(str) as argument and converts it to an integer and returns it.

**Note:** You are not allowed to use inbuilt function.

**Example 1:**

```
Input:
str = 123
Output:123

```

**Example 2:**

```
Input:
str = 21a
Output:-1
Explanation:Output is -1 as all
characters are not digit only.
```

**Expected Time Complexity:** O(|S|), |S| = length of string str.

**Expected Auxiliary Space:** O(1)

```java
class Solution
{
    int atoi(String str) {
	    int n = str.length();
        int s=0;
        boolean flag=false;
        for(int i=0; i<n; i++) {
            if (i==0 && str.charAt(i)=='-') {
                flag=true;
                continue;
            }
            if (str.charAt(i)>= '0' && str.charAt(i)<='9') {
                s = s*10 + str.charAt(i) - '0';
            } else {
                return -1;
            }
        } 
        return flag ? (-1 * s) : s;
    }
}
```

## Remove Stars from string

[Removing Stars From a String - LeetCode](https://leetcode.com/problems/removing-stars-from-a-string/description/)

```python
class Solution {
    public String removeStars(String str) {
        Stack<Character> stack=new Stack<>();
        
        for (Character ch : str.toCharArray()) {
            // star char
            if (ch=='*' && !stack.isEmpty()) {
                stack.pop();
            } 
            // non star char
            else if (ch!='*') {
                stack.push(ch);
            }
            // char is * but stack is empty so we skip that character
        }
        
        ArrayList<Character> tmp=new ArrayList<>();
        
        while (! stack.isEmpty()) {
            tmp.add(stack.pop());
        }
        int n = tmp.size();
        for(int i=0; i<n/2; i++) {
            Character left=tmp.get(i);
            Character right=tmp.get(n-i-1);
            
            tmp.set(i,right);
            tmp.set(n-i-1,left);
        }
        String finalAns="";
        for(Character ch : tmp) {
            finalAns+=ch;
        }
        return finalAns;
    }
}

// another solution

class Solution {
    public String removeStars(String s) {
        StringBuilder c = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '*') {
                c.deleteCharAt(c.length() - 1);
            } else {
                c.append(s.charAt(i));
            }
        }
        return c.toString();
    }
}
```