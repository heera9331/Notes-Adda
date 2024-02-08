# Shortest Common Supersequence

Given two string s1 and s2, find the shortest string that has
both s1 and s2 as subsequence.

```
Input:
s1 = "geek"
s2 = "eke"

Output:
5 (that is 'geeke')
```

## Approach

## Solution

```java
int shortestCommonSuperSequence(String s1, String s2) {
    int n = s1.length;
    int m = s2.length;
    return (m+n) - lcs(s1, s2, n, m);
}
```
