## Find repeat element in an array 
You are given an array of N+2 integer elements. All elements of the array are in the range 1 to N. Also, all elements occur once except two numbers which occur twice. Find the two repeating numbers.

Note: Return the numbers in their order of appearing twice. So, if X and Y are the repeating numbers, and X repeats twice before Y repeating twice, then the order should be (X, Y).


Example 1:

Input:
N = 4
array[] = {1,2,1,3,4,3}
Output: 1 3
Explanation: In the given array, 
1 and 3 are repeated two times.

`
Input:
N = 4
array[] = {1,2,1,3,4,3}
Output: 1 3
Explanation: In the given array, 
1 and 3 are repeated two times.
`

`
Expected Time Complexity: O(N).
`

`
Expected Auxiliary Space: O(1). 
`


`
Constraints:
2 ≤ N ≤ 105
1 ≤ array[i] ≤ N
`


```
public int[] twoRepeated(int arr[], int N)
    {
        int ans[] = new int[2];
        int k = 0;
        for(int i=0;i<(N+2); i++) {
            int idx = Math.abs(arr[i]);
            
            if(arr[idx] < 0) {
                ans[k++]=idx;
            }
            else {
                arr[idx] = -arr[idx];
            }
        }
        return ans;
    }

```
