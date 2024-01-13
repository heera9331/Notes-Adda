# Equal Sum Partition

Given an array of integers of size n and divide or partition array into two subset.

```
input:

arr = [1,5,11,5]

[1,5,5] = [11]

output:

true

```

## Solution

Login -> if array total sum is odd then wen can't divide the array into two equal part.

```
bool equalParition(arr, n) {
    sum=0
    for i=0 to i=n-1
        sum += arr[i]

    if sum%2==0: return false

    return isSubSetSum(a, sum/2)
}
```
