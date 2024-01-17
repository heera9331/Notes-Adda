# Unbounded Knapsack

Given a kanpsack weight w and a set of n itemms with contain
value val[i] and weight wt[t], we need to calculate maximum
amount that could make up this quanlity excatly is different
from classical knapsack problem,

- In this type of problem we allowed to use unlimited number
  of intances of items

**Testcases**

```
Input:
w = 100
val = {1,30}
wt = {1,50}

Output:
100
```

## Solution

```java

// 0/1 knapsack
int fnRec(int val[], int wt[],int i, int w, int n) {
    if(i>=n) {
        return 0;
    }

    if(wt[i]>w) {
        return fnRec(val, wt, i+1, w, n);
    }

    int take=fnRec(val, wt, i, w-wt[i], n);
    int notTake = fnRec(val, wt, i+1, w, n);
    return Math.max(take, notTake);
}

int knapsack(int val[], int wt[], int w) {
    return fnRec(val, wt, w, val.length, 0);
}

```
