## Duplicate in an Array

Que. 1 - Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**

Input: 

nums = [1, 2, 3, 1]

Output: true 

**Example 2:**

Input:

nums = [1, 2, 3, 4]

Output: false

**Approach 1 - Brute Force (O(n^2))**

```java
static boolean duplicateElement(int nums[]) {
	  for(int i=0; i<nums.length-1; i++) {
	      for(int j=i+1; j<nums.length; j++) {
	          if(nums[i] == nums[j]) {
	              return true;
	          }
	      }
	  }
	  return false;
}
```

**Approach 2 - using Sets (O(n))**

```java
static boolean duplicateElement(int nums[]) {
    HashSet<Integer> set = new HashSet<>();
    for(int i=0; i<nums.length; i++) {
        if(set.contains(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
}
```

## Search in rotated sorted array

Que. 2 - 

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return *the index of* `target` *if it is in* `nums`*, or* `-1` *if it is not in* `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

```

**Example 3:**

```
Input: nums = [1], target = 0
Output: -1

```

**Constraints:**

- `1 <= nums.length <= 5000`
- `104 <= nums[i] <= 104`
- All values of `nums` are **unique**.
- `nums` is an ascending array that is possibly rotated.
- `104 <= target <= 104`

```java
static int searchRotatedArray(int arr[], int target) {
    int low=0,high=arr.length-1;
    while(low<=high) {
        int mid = (low+high) >> 1;
        if(arr[mid] == target) {
            return mid;
        }
        // the left side is sorted
        if (arr[low] <= arr[mid]) {
            if(target >= arr[low] && target <= arr[mid]) {
                high = mid-1;
            } else {
                low = mid + 1;
            }
        } else {
            if(target >= arr[mid] && target <= arr[high]) {
                low = mid+1;
            } else {
                high = mid-1;
            }
        }
        
    }
    return -1;
}
```

## **Best Time to Buy and Sell Stock**

Que. 3 -

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

```

**Constraints:**

- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 104`

```java
static int maxProfit(int prices[]) {
    int n = prices.length;
    // track lowest buying price
    int buyPrice = Integer.MAX_VALUE;
    int maxProfit = 0;

    for(int i=0; i<n; i++) { 
        if (buyPrice < prices[i]) {
            // profit
            int profit = prices[i] - buyPrice; // today's profit
            maxProfit = Math.max(maxProfit, profit);
        } else {
            buyPrice = prices[i];
        } 
    }

    return maxProfit;
}
```

Que. 4 -

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`
, compute how much water it can trap after raining.

[]()

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/81c873bb-1e65-4a62-a14d-144846351877/Untitled.png)

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

```

**Example 2:**

```
Input: height = [4,2,0,3,2,5]
Output: 9

```

**Constraints:**

- `n == height.length`
- `1 <= n <= 2 * 104`
- `0 <= height[i] <= 105`

```java
static int trap(int[] height) {
    int n = height.length;
    // calculate left max level
    int[] leftMax = new int[n];
    leftMax[0] = height[0];
    for(int i=1; i<n; i++) {
        int currEle = height[i];
        if (leftMax[i-1] < currEle) {
            leftMax[i] = currEle;
        } else {
            leftMax[i] = leftMax[i-1];
        }
    }
    // calculate right max level of water
    int[] rightMax = new int[n];
    rightMax[n-1] = height[n-1];
    for(int i=n-2; i>=0; i--) {
        int currEle = height[i];
        if (currEle > rightMax[i+1]) {
            rightMax[i] = currEle;
        } else {
            rightMax[i] = rightMax[i+1];
        }
    }
    int ans = 0;
    for(int i=0; i<n; i++) {
        int mn = Math.min(leftMax[i], rightMax[i]);
        ans += mn - height[i];
    }
    return ans;
}
```