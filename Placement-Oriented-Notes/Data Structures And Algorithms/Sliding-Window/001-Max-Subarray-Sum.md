# Given an array of integers and a positive integer k, find the maximum sum of any contiguous subarray of size k.


`Link`



`Description`



`Testcases` 

input
arr = [3,4,2,5,6,7,8]
k = 3

output 21

## Constraints



## Approach

- brute force approach

- mx = -inf
- iterate array 0 to n-k for each iteration
    sum = 0
    we apply nested iteration from i to i+k and sum up the  
    values 

    mx = max(sum, mx)
- ans is mx
    

## Complexity

`Time Complexity - O(1)`

`Space Complexity - O(n*k)`

## Solution

```java
public class Solution {
    int maxSumSubArray(int nums[], int k) {
        int mx= Integer.MIN_VALUE;
        for(int i=0; i<n-k; i++) {
            int sum=0;
            for(int j=i; j<i+k; j++) {
                sum += nums[j];
            } 
            mx = Math.max(mx, sum);
        }
        return mx;
    }
}
```

## Approach - k-sized sliding window
    

## Complexity

`Time Complexity - O(1)`

`Space Complexity - O(n)`

## Solution

```java
public class Solution {
    int maxSumSubArray(int nums[], int k) {
        int n = nums.length;
        int sum=0;
        int mx=Integer.MIN_VALUE;
        for(int i=0; i<k; i++) {
            sum += nums[i];
        }

        mx = Math.max(sum , mx);

        for(int i=k; i<n-k; i++) {
            // remove
            sum -= nums[i-k];
            sum += nums[i+k-1];

            mx = Math.max(mx, sum);
        }

        return mx;
    }
}
```