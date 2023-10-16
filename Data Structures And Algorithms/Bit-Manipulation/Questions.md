# 1318. Minimum Flips to Make a OR b Equal to c

Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

Example 1:

![image](./images/sample_3_1676.png "a title")

```Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1
Example 3:

Input: a = 1, b = 2, c = 3
Output: 0
```

**Constraints:**

`1 <= a <= 10^9`  <br>

`1 <= b <= 10^9` <br>

`1 <= c <= 10^9` <br>

## Approach

- first take last bit of a, b and c => if c == 0 => we need to flip a and b (means a + b)
- if c == 1 than we need to flip a and b if only if a == 0 and b == 0 else don't do anything
- repeat first step untill a > 0 or b > or c > 0

## Time Complexity
 
- Time complexity: O(1) 
- Space complexity: O(1) 

## Solution

```java
class Solution {
    public int minFlips(int a, int b, int c) {
        int flips = 0;

        while(a>0 || b>0 || c>0 ) {
            int bitA = a&1;
            int bitB = b&1;
            int bitC = c&1;

            if(bitC == 0) {
                flips += (bitA+bitB);
            } 
            else {
                if(bitA == 0 && bitB == 0) {
                    flips += 1;
                }
            }

            a = a>>1;
            b = b>>1;
            c = c>>1;
        }
        return flips;
    }
}
```