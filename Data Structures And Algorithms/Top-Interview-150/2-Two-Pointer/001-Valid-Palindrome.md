
# Valid Palindrome

`Link`

https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

`Testcase`

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

## Constraints

`1 <= s.length <= 2 * 105`

`s consists only of printable ASCII characters.`


## Approach

## Complexity

`Time Complexity - O(N)`

`Space Complexity - O(N)`

## Solution

```java
class Solution:
    def isPalindrome(self, s: str) -> bool:
        arr = []
        for ch in s:
            if (ch >= 'a' and ch <= 'z') or (ch <= 'Z' and ch >= 'A') or ch.isdigit():
                arr.append(ch.lower())

        n = len(arr)
        left=0
        right=n-1
        while(left<=right):
            if arr[left]!=arr[right]:
                return False
            
            left+=1
            right-=1

        return True


        
```