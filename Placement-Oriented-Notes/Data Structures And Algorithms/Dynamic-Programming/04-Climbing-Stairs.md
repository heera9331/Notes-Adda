![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e577cf6d-ecd8-48d4-b13a-9c498f113735/Untitled.png)

### Climbing Stairs

```java
public class Main {
		// recursion O(2^N)
    static int countWays(int n) {
        if (n==0) {
            return 1;
        }
        if (n==-1) {
            return 0;
        }
        return countWays(n-1)+countWays(n-2);
    }
    public static void main(String[] args) {
        System.out.println(countWays(5)); // 3->3 + 4->5 ==> 8
    }
}
```

```java
// Memoization
 public class Main {
    static int countWays(int n, int ways[]) {
        if (n==0) {
            return 1;
        }
        if (n==-1) {
            return 0;
        }
				if(ways[n]!=-1) return ways[n];

        ways[n] = countWays(n-1,ways)+countWays(n-2,ways);
        return ways[n];
    }
    public static void main(String[] args) {
        int n = 5;
        int[] ways = new int[n+1];
				Arrays.fill(ways, -1);
        System.out.println(countWays(n,ways)); // 3->3 + 4->5 ==> 8
    }
}
```