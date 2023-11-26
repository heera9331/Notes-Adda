# Minimum Size Subarray Sum

`Link`

https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

`Testcases`

Example 1:

    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.
    Example 2:

    Input: target = 4, nums = [1,4,4]
    Output: 1
    Example 3:

    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0

## Constraints

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

## Approach - Brute Force

## Complexity

`Time Complexity - O(n^2)`

`Space Complexity - O(1)`

## Solution

````java
  class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int ans = Integer.MAX_VALUE;

        int n = nums.length;
        for(int i=0; i<n; i++) {
            int curr = 0;
            int cnt = 0;
            for(int j=i; j<n; j++) {
                if(curr >= target){
                    ans = Math.min(ans, cnt);
                }
                else  {
                    curr += nums[j];
                    cnt++;
                    if(curr >= target) {
                        ans = Math.min(ans, cnt);
                    }
                }
            }
        }
        if (ans == Integer.MAX_VALUE) {
            return 0;
        }
        return ans;
    }
}```

## Approach - Brute Force

## Complexity

`Time Complexity - O(n)`

`Space Complexity - O(1)`

## Solution

````cpp
class Solution {
    public:
    int minSubArrayLen(int s, vector<int>& nums)
    {
        int n = nums.size();
        int ans = INT_MAX;
        int left = 0;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += nums[i];
            while (sum >= s) {
                ans = min(ans, i + 1 - left);
                sum -= nums[left++];
            }
        }
        return (ans != INT_MAX) ? ans : 0;
    }
};

```


```
