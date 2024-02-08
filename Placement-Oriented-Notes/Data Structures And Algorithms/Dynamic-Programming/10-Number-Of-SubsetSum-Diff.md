# Number of Subsets with given difference

Given an array and difference, find the no of subsets that array can be
divided. so that each difference between the two subset is qual to the
given difference

```
Input: N = 4, arr[] = [5, 2, 6, 4], diff = 3
Output: 1
Explanation: We can only have a single partition which is shown below:
{5, 2} and {6, 4} such that S1 = 7 and S2 = 10 and thus the difference is 3

Input: N = 5, arr[] = [1, 2, 3, 1, 2], diff = 1
Output: 5
Explanation: We can have five partitions which is shown below
{1, 3, 1} and {2, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4
```

**Intuision**

- sum(s1) + sum(s2) = sum(a)
- sum(s1) - sum(s2) = diff

---

2 sum(s1) = sum(a) + diff

sum(s1) = [sum(a)+diff]/2

## Solution

```java
fn noOfSubsetDiff(int a[], int diff) -> int {
    int totalSum=0;
    for val: int -> a
        sum += val

    int sum = (diff+totalSum)/2;
    return cntSubsetSum(a.len, a, sum);
}
```
