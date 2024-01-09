# Finding Subsets of a Set

`Link`

`Description`

Given a set, a subset is any collection of items from that set, where the order doesn't matter. For a set A, all possible subsets can be found by considering all possible combinations of its elements.

Example:
If you have a set A = {1, 2, 3}, the subsets are:

```
{}, the empty set
{1}
{2}
{3}
{1, 2}
{1, 3}
{2, 3}
{1, 2, 3}
```

`Testcases`

```
Input
arr = [1,2,3]

Output
[]
[1]
[2]
[3]
[1,2]
[1,3]
[2,3]
[1,2,3]
```

## Constraints

## Approach

## Complexity

`Time Complexity - O(2^n)`

`Space Complexity - O( )`

## Solution

```python

"""
@author - @heera9331
@date - 09-01-2024
@desc - find subsets from a set
""" 

ans = []

"""
@params a -> list[int]
@params i -> i : int -> current item
@params sbs -> current subset
@return - None
"""
def fnx(a: list[int], i: int, sbs: list[int]):
    if i == len(a):
        ans.append(sbs[:])
        return
    
    # leave
    fnx(a, i+1, sbs)
    
    # take
    sbs.append(a[i])
    fnx(a, i+1, sbs)
    sbs.pop()

"""
@params a - list[int]
@return 2d list
"""
def findSubset(a: list[int]):
    fnx(a, 0, [])
    return ans


a = [1, 2, 3]
print(findSubset(a))

```
