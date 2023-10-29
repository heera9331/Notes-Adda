# Power of Four
 
`Link`

https://leetcode.com/problems/power-of-four/description/?envType=daily-question&envId=2023-10-23

`Description`

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

 

`Testcase`

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true

## Constraints

`-231 <= n <= 231 - 1`
 

## Approach

I think each programming language has math.log function. We use it. For example, Python has math.log(n, 4) function. The math.log(n, 4) function in Python calculates the logarithm of n to the base 4.

For example,

math.log(16, 4) == 2.0
math.log(15, 4) == 1.9534452978042594
because 4 raised to the power of 2 is 16. In Python, we will get the answer with float(2.0). Simply, if the decimal part is 0, we can return True, if not, return False. We can use is_integer() function to check it.

## Complexity

`Time Complexity - O(1)`

`Space Complexity - O(1)`

## Solution

```java
class Solution {
    public boolean isPowerOfFour(int n) {
        if (n <= 0) {
            return false;
        }
        return Math.log(n) / Math.log(4) % 1 == 0;        
    }
}

```
## Solution

```java
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False
            
        return math.log(n, 4).is_integer()

```