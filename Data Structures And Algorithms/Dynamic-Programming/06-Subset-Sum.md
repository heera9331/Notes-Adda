# Subset Sum

`Link`

`Description`

Given an aray of non-negative integers and a value sum, determine if there is a subset of the given set with sum equal to given sum.

`Testcases`

```
Input:

a = [5, 3, 4, 4, 12, 5, 2]
sum = 9

Output:

true


Input:

a = [3, 3, 4, 4, 12, 5, 2]
sum = 30

Output:

false

```

## Constraints

## Approach 1

**Recursive**
 

## Complexity

`Time Complexity - O(2^N)`

`Space Complexity - O(1)`

## Solution

```python

"""
@author - @heera9331
@date - 09-01-2023
@desc - finding target subset sum

"""

"""
@params - a : list[int]
@params - target : integer
@pamams - i : int = current element, index
"""
def fnx(a: list[int], target: int, i: int):
    if i >= len(a):
        return False
    if target == 0:
        return True
    if target < 0:
        return False

    if target >= a[i]:
        # take it
        take = fnx(a, target-a[i], i+1)
        # leave it
        leave = fnx(a, target, i+1)
        if take == True or leave == True:
            return True
        else:
            False

    return fnx(a, target, i+1)

"""
@params - a : list[int]
@params - target : integer
"""

def sub_set_sum(a: list[int], target: int):
    return fnx(a, target, 0)


a = [3, 3, 4, 4, 12, 5, 2]
_sum = 30

print(sub_set_sum(a, _sum))

```




## Approach 2

**Dynamic Programming**



## Complexity

`Time Complexity - O()`

`Space Complexity - O()`

## Solution

```python


def subset_sum(a: list[int], target: int):
    n = len(a)
    dp = [[False]*(target+1) for _ in range(n+1)]

    for i in range(n+1):
        dp[i][0] = True

    for i in range(1, n+1):
        for j in range(1, target+1):
            if a[i-1] <= j:
                dp[i][j] = dp[i-1][j] or dp[i-1][j-a[i-1]]
            else:
                dp[i][j] = dp[i-1][j]

    return dp[n][target]

a = [3, 3, 4, 4, 12, 5, 2]
_sum = 9

print(subset_sum(a, _sum))

```

