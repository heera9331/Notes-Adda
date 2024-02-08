# 0/1 Knapsack

https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1

```cpp
Input:
N = 3
W = 4
values[] = {1,2,3}
weight[] = {4,5,1}
Output: 3

Input:
N = 3
W = 3
values[] = {1,2,3}
weight[] = {4,5,6}
Output: 0
```

## Approach 1

**Recursive**

- At every step we have a choice if current we take it or leave
- If we take then knapsack capacity is reduced
- 

```java
public class Main {
    static int knapsack(int val[], int wt[], int w, int n) { // O(2^N)
        if(w==0 || n==0) {
            return 0;
        }

        if(wt[n-1]<=w) {
            //valid
            // include
            int ans1 = val[n-1]+ knapsack(val, wt, w-wt[n-1], n-1);
            // exclude
            int ans2 = knapsack(val, wt, w, n-1);
            return Math.max(ans1, ans2);
        } else {
            // not valid
            return knapsack(val, wt, w, n-1);
        }

    }
    public static void main(String[] args) {
        int[] val = {15,14,10,45,30};
	    int[] wt = {2,5,1,3,4};
        int w=7;
        System.out.println(knapsack(val, wt, w, val.length));
    }
}
```


## Approach 2

**Bottom UP - Dynamic Programming**

```java
public class Main {
    static int knapsack(int val[], int wt[], int w, int n, int[][] dp) { // O(N*W)
        if (w == 0 || n == 0) {
            return 0;
        }

        if (dp[n][w] != -1) {
            return dp[n][w];
        }
        if (wt[n - 1] <= w) {
            // valid
            // include
            int ans1 = val[n - 1] + knapsack(val, wt, w - wt[n - 1], n - 1, dp);
            // exclude
            int ans2 = knapsack(val, wt, w, n - 1, dp);
            dp[n][w] = Math.max(ans1, ans2);
            return dp[n][w];
        } else {
            // not valid
            dp[n][w]=knapsack(val, wt, w, n - 1, dp);
            return  dp[n][w];
	    }

    }

    public static void main(String[] args) {
        int[] val = { 15, 14, 10, 45, 30 };
        int[] wt = { 2, 5, 1, 3, 4 };
        int w = 7;
        int[][] dp = new int[val.length + 1][w + 1];
        for (int i = 0; i <= val.length; i++) {
            for (int j = 0; j <= w; j++) {
                dp[i][j] = -1;
            }
        }
        System.out.println(knapsack(val, wt, w, val.length, dp));
    }
}
```

```cpp
class Solution 
{ 
    // submitted
    //Function to return max value that can be put in knapsack of capacity W.
    static int knapSack(int W, int wt[], int val[], int n) 
    { 
         // your code here 
        int dp[][]=new int[n+1][W+1];
        
        for(int row[] : dp) {
            Arrays.fill(row, -1);
        }
        
        return util(val, wt, W, n, dp); 
    } 
    
    static int util(int[] val, int[] wt, int w, int n, int dp[][]) {
        if(dp[n][w]!=-1) {
            return dp[n][w];
        }
        
        if (n==0 || w==0) {
            return 0;
        }
        
        
        if(wt[n-1]>w) {
            dp[n][w]=util(val, wt, w, n-1, dp);
            
            return dp[n][w];
            
        }
        
        
        // take
        int ans1 = val[n-1] + util(val, wt, w-wt[n-1], n-1, dp);
        
        // leave it
        int ans2 = util(val, wt, w, n-1, dp);
        
        dp[n][w]=Math.max(ans1, ans2);
        
        return dp[n][w];
        
        
    }
}
```

### Tabulation

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a0a0570-6cb8-4e8d-b6e2-090dd504268c/Untitled.png)

```markdown
1. create table
2. meaning assign -> (i,j) initialize
3. fill (bottom up) small to large
4. j(w) = 0 profit = 0
5. i = 0 -> profit = 0
6. i-items + j = w(knapsack size) ==> max profif
```

```java
public class Main { 

    static int knapsackTab(int[]val, int[] wt, int w) {
        int n = val.length; 
        int[][] dp = new int[n+1][w+1];

        for(int i=0; i<dp.length; i++) {
            dp[i][0]=0;
        }
        for(int j=0; j<dp[0].length; j++) {
            dp[0][j]=0;
        }

        for(int i=1; i<n+1; i++) {
            for(int j=1; j<w+1; j++) {
                int v = val[i-1]; // ith item val
                int u = wt[i-1]; // ith item wt
                if (u<=j) { // valid
                    int incProfit = v+dp[i-1][j-u];
                    int excProfix = dp[i-1][j];
                    dp[i][j]=Math.max(incProfit,excProfix);
                } else {
                    // invalid
                    int excProfix = dp[i-1][j];
                    dp[i][j]=excProfix;
                }
            }
        }
        return dp[n][w];
    }

    public static void main(String[] args) {
        int[] val = { 15, 14, 10, 45, 30 };
        int[] wt = { 2, 5, 1, 3, 4 };
        int w = 7; 
        System.out.println(knapsackTab(val, wt, w));
    }
}
```




