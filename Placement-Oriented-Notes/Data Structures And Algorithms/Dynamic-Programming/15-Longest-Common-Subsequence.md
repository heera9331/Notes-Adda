# Longest Common Subsequence (LCS)

Given two string s1 and s2, return the length of longest
common subsequence (LCS), is there is no common subsequence
return 0

> A common subsequence of two strings is subsequence that is common to both strings

```
Input:
s1 = "abcde"
s2 = "ace"

Output:
ace
```

## Approach

## Solution (Recursion)

```java
int fn(s1: str, s2: str, i: int, j: int) {
    if (s1.length <= i || j>=s2.length) {
        return 0;
    }

    if(s1[i] == s2[j]) {
        return 1+fn(s1, s2, i+1, j+1);
    }

    int t1 = fn(s1, s2, i+1, j);
    int t2 = fn(s1, s2, i, j+1);
    return max(t1, t2);
}

int lcs(int s1, int s2) {
    return fn(s1, s2, 0, 0);
}
```

## Dynamic Programming (Memoization)

```java
// constraints
int dp[][] = new int[1001][1001];

int fn(int i, int j, String s1, String s2) {
    if(i<0 || j<0) {
        return 0;
    }

    if(dp[i][j]!=0) {
        return dp[i][j];
    }

    if(s1[i-1] == s2[j-1]) {
        return dp[i][j] = 1 + fn(x-1, y-1, s1, s2);
    }
    return dp[i][j] = max(fn(x-1, y, s1, s2), fn(x, y-1, s1, s2));
}

int lcs(String s1, String s2) {
    for(int [] row : dp) {
        Arrays.fill(row, 0);
    }
    return fn(s1.length(), s2.length(), s1, s2);
}
```
