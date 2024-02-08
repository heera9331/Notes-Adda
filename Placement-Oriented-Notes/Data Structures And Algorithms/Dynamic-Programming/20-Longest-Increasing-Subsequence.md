# Longest Increasing Subsequence

```
Input: arr[] = {3, 10, 2, 1, 20}
Output: 3
Explanation: The longest increasing subsequence is 3, 10, 20

Input: arr[] = {3, 2}
Output:1
Explanation: The longest increasing subsequences are {3} and {2}

```

## Approach

## Solution (TLE)

```python
class Solution:
    def lengthOfLIS(self, nums):
        if not nums:
            return 0

        def lis_recursive(index):
            if index == 0:
                return 1

            max_length = 1
            for j in range(index):
                if nums[index] > nums[j]:
                    max_length = max(max_length, 1 + lis_recursive(j))

            return max_length

        n = len(nums)
        result = 1  # Minimum LIS length is 1 for any non-empty array
        for i in range(1, n):
            result = max(result, lis_recursive(i))

        return result
# a = [3, 10, 2, 1, 20]
# a = [0, 1, 0, 3, 2, 3]
a = [3, 2]

print(lis(a))
```

## Approach - Dynamic Programming

-

## Solution TopDown

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] dp = new int[nums.length];

        dp[0] = 1;
        int res = 1;

        for(int i = 1; i < nums.length; i++){
            int max = 0;
            for(int j = 0; j < i; j++){
                if(nums[i] > nums[j]){
                    max = Math.max(dp[j], max);
                }
            }
            dp[i] = max+1;
            res = Math.max(res, dp[i]);
        }
        return res;
    }
}
```
