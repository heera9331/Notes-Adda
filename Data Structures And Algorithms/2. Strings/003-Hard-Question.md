## Longest Palindromic Substring

Given a string `s`, return *the longest palindromic substring* in s

.

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

```

**Example 2:**

```
Input: s = "cbbd"
Output: "bb"

```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

********Note - Time Limit Exceed********

```java
class Solution {
    
    public boolean isPalindrome(String str) {
        int n=str.length();
        for(int i=0; i<n/2; i++) {
            if (str.charAt(i)!=str.charAt(n-i-1)) {
                return false;
            }
        }
        return true;
    }
    public String longestPalindrome(String str) {
        
        ArrayList<String> substr=new ArrayList<>();
        int length=str.length();
        for(int i=0; i<length; i++) {
            for(int j=i+1; j<=length; j++) {
                substr.add(str.substring(i,j));
            }
        }
        String ans=""; 

        for(String s : substr) {
            if (isPalindrome(s)==true) {
                if (s.length()>ans.length()) {
                    ans=s;
                }
            }
        }
        return ans;
    }
}
```

## Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"

```

**Example 2:**

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        // length of smallest word
        int len=Integer.MAX_VALUE;
        String ans="";
        for(String word:strs) {
            len=Math.min(len, word.length());
        }
        for(int i=0; i<len; i++) {
            boolean flag=true;
            // ith char of first word
            char ch=strs[0].charAt(i);

            // iterate 1 to n-1
            for(int j=1; j<strs.length; j++) {
               if(strs[j].charAt(i)!=ch) {
                flag=false;
               } 
            }

            if(flag) {
                ans+=ch;
            } else {
                break;
            }
        }
        return ans;
    }
}
```