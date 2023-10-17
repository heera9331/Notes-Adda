# A Very Big Sum

`Sample Input`

5
1000000001 1000000002 1000000003 1000000004 1000000005
Output

5000000015

## Solution

```java

public static long aVeryBigSum(List<Long> ar) {
// Write your code here
    Long s=new Long(0);
    for(Long val : ar) {
        s += val;
    }
    return s;

}
```