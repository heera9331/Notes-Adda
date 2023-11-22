# Count Nice Pairs in an Array

`Link`

https://leetcode.com/problems/count-nice-pairs-in-an-array/description/

`Description`

You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

 

`Testcases`

Example 1:

    Input: nums = [42,11,1,97]
    Output: 2
    Explanation: The two pairs are:
    - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
    - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.
    
Example 2:

    Input: nums = [13,10,35,24,76]
    Output: 4

## Constraints

`1 <= nums.length <= 105`

`0 <= nums[i] <= 109`

## Approach 1

- bruteforce approach to count all the pairs in a given array of numbers.
- whose nums[i] + reverse of nums[j] are equal than increment the counter.
- answer is counting.

```
ans=0
for (i=0; i<nums.length; i++) {
    for(j=i+1; j<=nums.length; j) {
        if(nums[i] + rev(nums[j] == rev(nums[i] + nums[j]))) {
            ans++;
        }
    }
}
return ans;
```


## Complexity

`Time Complexity - O(n^2)`

`Space Complexity - O(1)`

## Solution

```java
class Solution {
    int rev(int n) {
        int s = 0;
        while(n!=0) {
            s = s*10 + n%10;
            n/=10;
        }
        return s;
    }
    
    public int countNicePairs(int[] nums) {
        int cnt=0;
        int n = nums.length;
        for(int i=0; i<n; i++) {
            for(int j=i+1; j<n; j++) {
                if(i!=j) { 
                    int s = nums[i] + rev(nums[j]);
                    int s1 = rev(nums[i]) + nums[j];

                    if(s == s1) {
                        cnt++;
                    }
                }
            }
        }

        return cnt/2;
    }
}

```
## Approach 1

  

## Complexity

`Time Complexity - O(n)`

`Space Complexity - O(n)`

## Solution

```cpp
#define mod 1000000007

class Solution {
public:

    int rev(int n) {
        int s = 0;
        while(n) {
            s = s*10 + n%10;
            n = n/10;
        }
        return s;
    }

    int countNicePairs(vector<int>& nums) {
        int ans=0;
        unordered_map<int, int> freq;

        for(auto el : nums) {
            int val = el - rev(el);

            ans = (ans + freq[val])%mod;
            freq[val]++;
        }
        
        return ans;
    }
};
```