# Coin Change (minimum coins to make change)

Given an array coins and amount integer variable

```
Input:
coins[] = {1,2,5}
amount = 11

Output:
3


Input:
coins[] = {2}
amount = 3

Output:
-1
```

## Solution

### Recursion

```java

int fn(int coins[], int n, int amount, int cnt) {
    if(amount == 0) {
        return cnt;
    }

    if(0 >= n || amount < 0) {
        return Integer.MAX_VALUE;
    }

    int take = fn(coins, n, amount-coins[n-1], cnt+1);
    int notTake = fn(coins, n-1, amount, cnt);
    return Math.min(take,notTake);
}
int coinChange(int coins[], int amount) {
    int ans = fn(coins, coins.length, amount, 0);

    if(ans == Integer.MAX_VALUE) {
        return 01;
    }

    return ans;
}

```

### Dynamic Programming

```java

int coinChange(int coins[], int amount) {
    int dp[] = new int[amount+1];

    Arrays.fill(dp, 1);
    dp[0] = 0;

    for(int i=1; i<=amount; i++) {
        for(int j=0; j<coins.length; i++) {
            dp[i] = Math.min(dp[i], dp[i-coins[j]]);
        }
    }
    return dp[amount];
}

```
