# Remove Element
https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

 
**`Constraints:`**
 



## Approach 1



## Complexity

`Time Complexity - O( )`

`Space Complexity - O( )`
## Solution

```java
 
class Solution {
    public int removeElement(int[] arr, int val) {
        if (arr.length==0)
            return 0;
        int n = arr.length;
        for(int i=0; i<n; i++) {
            if(arr[i]==val) {
                arr[i]=Integer.MAX_VALUE;
            }
        }

        int iter=-1;
        for(int i=0; i<n;i++) {
            if(arr[i]==Integer.MAX_VALUE) {
                iter=i;
                break;
            }
        }
        if (iter==-1) {
            return arr.length;
        }
        for(int i=iter; i<n; i++) {
            if(arr[i]!=Integer.MAX_VALUE) {
                arr[iter++]=arr[i];
            }
        }
        arr[iter]=0;
        for(int i=0;i<arr.length; i++) {
            System.out.print(arr[i]+" ");
        }
        
        System.out.println();

        return iter;
    }
}
 
```

## Approach 2


## Complexity

`Time Complexity - O(n)`

`Space Complexity - O(n)`

# Solution

```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        new_arr = []
        
        for elm in nums:
            if elm != val:
                new_arr.append(elm)
        k = 0
        for elm in new_arr:
            nums[k] = elm
            k+=1
            
        return len(new_arr)
```