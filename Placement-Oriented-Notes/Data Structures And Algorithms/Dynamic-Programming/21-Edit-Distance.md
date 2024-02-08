# Edit Distance

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

`Testcases`

```
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

## Approach

## Solution

```java
class Solution {
    public int minDistance(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();

        int dp[][]= new int[m+1][n+1];

        for(int i=0; i<m+1; i++) {
            for(int j=0;j<n+1; j++) {
                if(i==0) {
                    dp[i][j] = j;
                }

                if (j==0) {
                    dp[i][j] = i;
                }
            }
        }

        for(int i=1; i<m+1; i++) {
            for(int j=1; j<n+1; j++) {
                if(s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                }

                else {
                    int add = dp[i-1][j]+1;
                    int del = dp[i][j-1]+1;
                    int rep = dp[i-1][j-1]+1;

                    dp[i][j] = Math.min(add, Math.min(del, rep));
                }
            }
        }

        return dp[m][n];
    }
}
```
