# Problem Name

`Link`

https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/?envType=daily-question&envId=2023-10-30

`Description`

You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

`Testcases`

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

## Constraints

`1 <= arr.length <= 500`

`0 <= arr[i] <= 104`

## Approach

## Complexity

`Time Complexity - O(n log n)`

`Space Complexity - O(n)`

## Solution

```python
from typing import List

class Solution:
    def count_ones(self, n):
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count

    class Pair:
        def __init__(self, num, bits1):
            self.num = num
            self.bits1 = bits1

    def fn(self, p1, p2):
        if p1.bits1 < p2.bits1:
            return -1
        if p1.bits1 > p2.bits1:
            return 1
        if p1.num < p2.num:
            return -1
        if p1.num > p2.num:
            return 1
        return 0

    def sortByBits(self, arr: List[int]) -> List[int]:
        alist = []

        for val in arr:
            cnt = self.count_ones(val)
            alist.append(self.Pair(val, cnt))

        alist.sort(key=lambda x: (x.bits1, x.num))

        ans = []

        for pair in alist:
            ans.append(pair.num)

        return ans


```

## Approach Leetcode

## Complexity

`Time Complexity - O(n log n)`

`Space Complexity - O(n)`

## Solution

```python
from typing import List

class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        arr.sort(key = lambda num: (num.bit_count(), num))
        return arr

```

```java
class Solution {
    public int[] sortByBits(int[] arr) {
        Integer[] nums = Arrays.stream(arr).boxed().toArray(Integer[]::new);
        Comparator<Integer> comparator = new CustomComparator();
        Arrays.sort(nums, comparator);
        return Arrays.stream(nums).mapToInt(Integer::intValue).toArray();
    }
}

class CustomComparator implements Comparator<Integer> {
    @Override
    public int compare(Integer a, Integer b) {
        if (Integer.bitCount(a) == Integer.bitCount(b)) {
            return a - b;
        }

        return Integer.bitCount(a) - Integer.bitCount(b);
    }
}
```
