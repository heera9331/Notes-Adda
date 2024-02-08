# isSubsequence

`Link`

https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

`Testcase`

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

## Constraints

`0 <= s.length <= 100` 

`0 <= t.length <= 104` 

`s and t consist only of lowercase English letters.`
 

## Approach



## Complexity

`Time Complexity - O(s*t)`

`Space Complexity - O(1)`

## Solution

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int cnt = 0;
        int recent = 0;
        for (char ch : s.toCharArray()) {
            
            for (int j = recent; j < t.length(); j++) {
                if (t.charAt(j) == ch) {
                    recent = j+1;
                    cnt++;
                    break;
                }

                if (cnt == s.length()) {
                    return true;
                }

            }
        }

        if (cnt == s.length()) {
            return true;
        }

        return false; 
    }
}

```