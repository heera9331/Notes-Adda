# Printing Longest Super Sequence

```
Input:
s1 = "abac"
s2 = "cab"

Output:
"cabac"
```

```
Input:
s1 = "aaaaa"
s2 = "aaaaa"

Output:
"aaaaa"
```

## Approach

## Solution

```java
String printLongestCommonSuperSequence(String s1, String s2) {
    int n = s1.length;
    int m = s2.length;
    int dp[][] = new int[n+1][m+1];

    // to dp lcs
    for(int i=0; i<=n; i++) {
        for(int j=0; j<=m; j++) {
            if(i == 0 || j == 0) {
                dp[i][j] = 0;
            }
            else if(s1[i-1] == s2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    int i = n;
    int j = m;
    StringBuilder sb = new StringBuilder();

    while (i>0 && j>0) {
        if(s1[i-1] == s2[j-1]) {
            sb.append(s1[i-1]);
            i--;
            j--;
        }
        else if (dp[i-1][j] > dp[i][j-1]) {
            sb.append(s1[i-1]);
            i--;
        }
        else {
            sb.append(s2[j-1]);
            j--;
        }
    }

    while(i>0) {
        sb.append(s1[i-1]);
        i--;
    }


    while(j>0) {
        sb.append(s1[j-1]);
        j--;
    }

    return sb.reverse().toString();
}
```
