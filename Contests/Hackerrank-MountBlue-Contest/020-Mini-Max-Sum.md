# Mini Max Sum

## Solution

```java

public static void miniMaxSum(List<Integer> arr) {
// Write your code here
    long total = 0;
    int min = arr.get(0);
    int max = arr.get(0);
    
    for(Integer val : arr) {
        min = Math.min(val, min);
        max = Math.max(val, max);
        total += val;
    }
    
    System.out.print((total - max) + " " + (total - min));
    
}
```