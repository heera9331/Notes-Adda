# Diagonal Difference

## Solution

```java
public static int diagonalDifference(List<List<Integer>> arr) {
    int p=0;
    int s=0;
    
    int n = arr.size(); 
    
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            if (i == j) {
                p+=arr.get(i).get(j);
            }
            if ((j+i) == n-1) {
                s += arr.get(i).get(j);
            }
        }
    }
    
    return Math.abs(p-s);

}
```