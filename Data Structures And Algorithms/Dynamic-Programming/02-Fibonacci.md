# nth fibonacci term



**Recursive Solution**

```java
int f(int n) {
    if (n == 0 || n == 1) {
        return n;
    }

    return f(n-1) + f(n-2);
}
```

**Using Dynamic Programming**

```java
int dp[n];
int fn(int n) {
    if(n == 0 || n == 1) {
        return n;
    }

    if(dp[n] != 0) {
        return dp[n];
    }

    return dp[n] = fn(n-1) + fn(n-2);
}
```