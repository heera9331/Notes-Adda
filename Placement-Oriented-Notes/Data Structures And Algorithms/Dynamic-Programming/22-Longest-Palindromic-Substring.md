# Longest Palindromic Substring

Given a string, find the longest palindromic subsequence.

```
Input:
s = "bbabcbcab"

Output:
7
```

## Approach Bruteforce

- find all the substring that is palindrome, and find maximum length string.

## Approach (Better Optmized)

- return lcs(s, reverse(s))
