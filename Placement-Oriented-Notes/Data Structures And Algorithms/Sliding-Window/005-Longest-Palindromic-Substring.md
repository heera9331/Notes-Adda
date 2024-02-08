# Longest Palindromic Substring

## Testcases

Input: s = "babad"
Output: 3
Explanation: The longest palindromic substring in s is "bab" or "aba".

Input: s = "cbbd"
Output: 2
Explanation: The longest palindromic substring in s is "bb".

Input: s = "a"
Output: 1
Explanation: The only palindromic substring in s is "a".

Input: s = "ac"
Output: 1
Explanation: The only palindromic substring in s is "a" or "c".

Input: s = "racecar"
Output: 7
Explanation: The whole string s is a palindrome, so the length of the longest palindromic substring is 7.


## Solution

```python
def longest_palindrome(s):
    if not s:
        return 0
    
    start = end = 0
    for i in range(len(s)):
        # check for odd length palindromic substrings with center at i
        left, right = i, i
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        if right - left - 1 > end - start:
            start = left + 1
            end = right 
            
        # check for even length palindromic substrings with center at i and i+1
        left, right = i, i + 1
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        if right - left - 1 > end - start:
            start = left + 1
            end = right
    
    return end - start
```