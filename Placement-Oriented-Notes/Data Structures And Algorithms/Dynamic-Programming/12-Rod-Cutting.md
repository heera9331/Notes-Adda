# Rod Cutting

Given a rod of length n inches and an array of prices of all pieces of size smaller
than n, determines value obtainable by cutting up the rod and selling the pieces.

```
Input:
n = 8
length   | 1   2   3   4   5   6   7   8
--------------------------------------------
price    | 1   5   8   9  10  17  17  20

Output:
22
```

## Approach

- taking one additional array of size n+1 and fill
- n=8 => arr = [1,2,3,4,5,6,7,8,9]
- apply unbounded knapsack wt -> arr

```java
int curRod(int prices[], int n) {
    int wt[] = new int[n+1];
    for(int i=0; i<=n; i++) {
        wt[i] = i+1;
    }
    return knapsack(prices, wt, n);
}
```
