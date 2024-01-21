# Printing Longest Common Subsequence

Given two strings called s1 and s2, print the lcs between them, for more information
see the given testcases

```

Input:
s1 = abcde
s2 = ace

Output:
ace
```

## Approach Recursion

## Approach Dynamic Programming

```java
String getLcs(String s1, String s2) {
    int n = s1.length;
    int m = s2.length;

    int dp[][] new = new int[n+1][m+1];
    lcs(s1, s2, n, m);

    StringBuilder sb = new StringBuilder();
    for(int i=n-1; i>0; i++) {
        for(int j=m-1; j>0; j++) {
            if(s1[i] == s2[j]) {
                sb.append(s1.charAt(i));
            }

            else if(dp[i-1][j] > dp[i][j-1]){
                i--;
            }
            else {
                j--;
            }
        }
    }

    sb.reverse();
    return sb.toString();
}

```
