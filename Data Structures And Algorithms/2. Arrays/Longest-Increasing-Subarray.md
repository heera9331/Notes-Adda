Given an array containing **n** numbers. The problem is to find the length of the longest contiguous sub-array such that every element in the sub-array is strictly greater than its previous element in the same sub-array. Time Complexity should be O(n).

```
Input : arr[] = {5, 6, 3, 5, 7, 8, 9, 1, 2}
Output : 5
The subarray is{3, 5, 7, 8, 9}
```

```java
class Main {

    public static int lenOfLongIncSubArr(int arr[], int n) { 
        int max = 1, len = 1;
 
        for (int i = 1; i < n; i++) {  
            if (arr[i-1] < arr[i])
                len++;
            else { 
                max = max(max, len)
								len = 1
            }
        } 
			return max(max, len)
    }
}
```

# Print Longest Increasing  Sub-array

```c
def longestIncreSubArray(arr:list):
    n=len(arr)
    temp=[1]*n

    for i in range(1,n):
        if arr[i]>arr[i-1]:
            temp[i]=temp[i-1]+1

    print (max(temp))

arr=[1,2,1,2,1,1]
arr=[5, 6, 3, 5, 7, 8, 9, 1, 2]
print(longestIncreSubArray(arr))
```