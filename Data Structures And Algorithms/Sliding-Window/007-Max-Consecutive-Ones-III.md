# Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

**Example 1:**

```
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

**Example 2:**

```
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

```

```java
class Solution {
    public int longestOnes(int[] nums, int k) { 
        int zerocnt=0;
        int i=0,j;
        int n=nums.length;
        int mx=0;
        for(j=0; j<n; j++) {
            if(nums[j]==0) {
                zerocnt++;
            }

            while(zerocnt>k) {
                if(nums[i]==0) {
                    zerocnt--;
                }
                i++;
            }

            mx=Math.max(mx, j-i+1);
        }

        return mx;

    }
}
```