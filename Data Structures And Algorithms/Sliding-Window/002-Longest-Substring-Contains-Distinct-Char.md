# Given a string s and a positive integer k, find the length of the longest substring that contains at most k distinct characters.

## Testcases

s = "abcba"
k = 2
output = 3

s = "aabacbebebe"
k = 3
output = 7

s = "abcde"
k = 1
output = 1

s = "abccbaaa"
k = 2
output = 5

## Solution

```python
def longest_substring(s, k):
    # Initialize variables
    max_length = 0
    j = 0
    mp = {}
    distinct_chars = 0

    # Iterate over the string
    for i in range(len(s)):
        # Add the current character to the window
        char = s[i]
        if char not in mp:
            mp[char] = 0
            distinct_chars += 1
        mp[char] += 1

        # Shrink the window if there are more than k distinct characters
        while distinct_chars > k: 
            mp[s[j]] -= 1
            if mp[s[j]] == 0:
                distinct_chars -= 1
            j += 1

        # Update the maximum length of the window
        max_length = max(max_length, i - j + 1)

    print( max_length)
```