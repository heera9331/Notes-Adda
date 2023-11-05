# Pythagorean Triplet


`Link`

https://www.geeksforgeeks.org/problems/pythagorean-triplet3018/1

`Description`

Given an array arr of n integers, write a function that returns true if there is a triplet (a, b, c) from the array (where a, b, and c are on different indexes) that satisfies a2 + b2 = c2, otherwise return false.

Example 1:



`Testcases`

Input:
N = 5
Arr[] = {3, 2, 4, 6, 5}
Output: Yes
Explanation: a=3, b=4, and c=5 forms a
pythagorean triplet.
Example 2:

Input:
N = 3
Arr[] = {3, 8, 5}
Output: No
Explanation: No such triplet possible.

## Constraints

- Expected Time Complexity: O(n+max(Arr[i])2)
- Expected Auxiliary Space: O(max(Arr[i]))
- 1 <= n <= 105
- 1 <= arr[i] <= 1000


## Approach 1

`Brute force approach` - find all triplates using three loop

`Best method my opinion` - sort array iterate array, in every iteration we apply two pointer approach to find target sum using
in sorted array.

Array sorting take O(n log n) complexity and 

## Complexity

`Time Complexity - O(n * log(n))`

`Space Complexity - O(1)`

## Solution

```java
class Solution {
    boolean checkTriplet(int[] arr, int n) {
        // code here
        Arrays.sort(arr);
        
        for(int i=n-1; i>=2; i--) {
            int k = arr[i]*arr[i];
            
            int right = i-1;
            int left = 0;
            while(left<right) {
                int sum = arr[left]*arr[left] + arr[right]*arr[right];
                
                if(k == sum) {
                    return true;
                }
                else if (k < sum) {
                    right--;
                }
                else {
                    left++;
                }
            }
            
        }
        return false;
    }
}
```

## Approach 2



## Complexity

`Time Complexity - O(N^2)`

`Space Complexity - O(N)`

## Solution

```java
class Solution:
    def checkTriplet(self, arr, n): 
        square_map = {i * i: i for i in arr}
 
        for square1 in square_map:
            for square2 in square_map: 
                sum_of_squares = square1 + square2
 
                if sum_of_squares in square_map:
                    return True
 
        return False
```