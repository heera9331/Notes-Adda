# Remove Duplicates From Sortede Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

Example 1:

    Input: nums = [1,1,1,2,2,3]
    Output: 5, nums = [1,1,2,2,3,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

    Input: nums = [0,0,1,1,1,1,2,3,3]
    Output: 7, nums = [0,0,1,1,2,3,3,_,_]
    Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

## Approach  



## Complexity

`Time Complexity - O(N)`

`Space Complexity - O(1)`

## Solution

```cpp
public int removeDuplicates(int[] nums) {
        int n = nums.length;
	    if (n < 3)
		    return n;
		
	    int i = 2;
        for (int j = i; j < n; j++)
            if (nums[j] != nums[i - 2])
                nums[i++] = nums[j];
                
	    return i;           
    }
```