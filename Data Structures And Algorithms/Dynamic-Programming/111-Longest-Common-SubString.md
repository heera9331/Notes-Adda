# Longest-Common-Substring

## Approach - Bruteforce

```java
public class Main {
    static int lcs(String s1, String s2) {
        int max = 0;
        int n = s1.length();
        int m = s2.length();

        for (int i = 0; i < n; i++) {
            int cnt = 0;
            int tmpI = i;
            for (int j = 0; j < m && tmpI < n; j++) {
                if (s1.charAt(tmpI) == s2.charAt(j)) {
                    cnt += 1;
                    tmpI += 1;
                } else {
                    max = Math.max(cnt, max);
                }
            }
        }

        return max;
    }

    public static void main(String[] args) {
        String s1 = "abcefg";
        String s2 = "gfabcedfg";
        System.out.println(lcs(s1, s2));
    }
}
```

## Approach - DP

````java
public class Main {
    // O(n*m)
    /**
     *
     * @param str1
     * @param str2
     * @return
     */
    static int longestCommonSubstring(String str1, String str2) {
        int n = str1.length();
        int m = str2.length();

        int[][] dp = new int[n+1][m+1];
        // initialization
        for(int i=0; i<n+1; i++) {
            dp[i][0]=0;
        }
        for(int j=0; j<m+1; j++) {
            dp[0][j]=0;
        }
        int ans = Integer.MIN_VALUE;

        for(int i=1;  i<n+1; i++) {
            for(int j=1; j<m+1; j++) {
                if (str1.charAt(i-1)==str2.charAt(j-1)) {
                    dp[i][j]=dp[i-1][j-1]+1;
                    ans = Math.max(ans, dp[i][j]);
                } else {
                    dp[i][j]=0;
                }
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        String str1 = "ABCDE";
        String str2 = "ABGCE";
        int ans = longestCommonSubstring(str1, str2); // O(n*m)
        System.out.println(ans);
    }
}```
````
