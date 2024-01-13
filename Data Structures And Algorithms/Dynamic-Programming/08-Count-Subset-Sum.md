# Count Subset Sum with given sum

Given an array arr[] of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

```
Input: arr[] = {1, 2, 3, 3}, X = 6
Output: 3

All the possible subsets are {1, 2, 3},
{1, 2, 3} and {3, 3}

Input: arr[] = {1, 1, 1, 1}, X = 1
Output: 4

```

## Brute Force Approach

- Exploring all the subset sum
- TC - O(2^n) and SC - O(1)

```python

fn cntSbsSum(a, i, target) {
    if (i >= len(a))
        return 0

    if (target == 0)
        return 1

    if (target >= a[i]) {
        take = fn(a, i+1, target-a[i])
        no_take = fn(a, i+1, target)

        return take+no_take
    }
    else {
        return fn(a, i+1, target)
    }

    # Other way

    if (target > a[i]) {
        return fn(a, i+1, target)
    }

    return fn(a, i+1, target-a[i]) + fn(a, i+1, target)
}
```

## Dynamic Programming

- TC - O(N) and SC - O(N)

```
int cntSbsSum(a, n, s) {
    dp[][] = new int[n+1][sum+1]
    Array.fill(dp[0],0);
    for(row[]:dp) {
        row[0] = 1
    }

    for(int i=1;i<=n; i++) {
        for(int j=1; j<=sum; j++) {
            if(a[i-1]<=j) {

            dp[i][j] =dp[i-1][j-a[i-1]] + dp[i-1][j]
            }
            else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][sum];
}
```
