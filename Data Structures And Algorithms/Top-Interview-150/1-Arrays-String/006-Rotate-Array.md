# Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 
## Constraints

`1 <= nums.length <= 105`

`-231 <= nums[i] <= 231 - 1`

`0 <= k <= 105`
 
 
## Approach 1

nums = [1,2,3,4,5,6,7]

k = 3

- reverse entire array, array become `[7,6,5,4,3,2,1]`
- reverse array from 0 to k-1, than array become `[5,6,7,4,3,2,1]`
- reverse array from k to n-1, than array become `[5,6,7,1,2,3,4]`

## Complexity

`Time complexity - O(N)`

`Space complexity - O(1)`

## Solution

```java
class Solution {
    void reverse(int nums[], int i, int j) {
        while(i<j) {
            int t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
            i++;
            j--;
        }
    }
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        reverse(nums, 0, n-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, n-1);
    }
}
```

## Approach 2

- use auxilliary array to store element
- 

## Complexity

`Time complexity - O(N)`

`Space complexity - O(1)`

## Solution

```java

```
