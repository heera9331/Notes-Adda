# Questions

## 1095. Find in Mountain Array
(This problem is an interactive problem.)

You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

MountainArray.get(k) returns the element of the array at index k (0-indexed).
MountainArray.length() returns the length of the array.
Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

 

Example 1:
```
Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
Example 2:

Input: array = [0,1,2,4,2,1], target = 3
Output: -1
Explanation: 3 does not exist in the array, so we return -1.
 ```

Constraints:

`**3 <= mountain_arr.length() <= 104**`

`**0 <= target <= 109**`

`**0 <= mountain_arr.get(index) <= 109**`

`Approach`

* Using a binary search findPeakIndex to locate the peak index of the mountain array.
* Perform a binary search for the target in the increasing part of the mountain array from index 0 to the peak index.
Use the binarySearch method with the reversed parameter set to false.
* If the target is found in the increasing part, return the index.
- If the target is not found in the increasing part, perform a binary search for the target in the decreasing part of the mountain array from the peak index to the end.
- Use the binarySearch method with the reversed parameter set to true.
- If the target is found in the decreasing part, return the index.
- If the target is not found in either part of the array, return -1 to indicate the absence of the target.

`Complexity`

`Time complexity: O(log(N))O(log(N))O(log(N))`
Since we are performing binary search three times: one time to find the peak, another time to find the target in increasing part and last time to find it in decreasing part.

This cost us `(3 * log(N)) which is O(log(N)).`
where N is the size of Mountain Array.

`Space complexity: O(1)O(1)O(1)`
Since we are using only constant variables and not using anyother data structures.