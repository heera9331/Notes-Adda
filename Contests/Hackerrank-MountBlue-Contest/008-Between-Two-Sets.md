
# Between Two Sets

```java
// Find the maximum and minimum values in both lists
    int minA = a.stream().mapToInt(Integer::intValue).max().orElse(0);
    int maxB = b.stream().mapToInt(Integer::intValue).min().orElse(Integer.MAX_VALUE);
    int count = 0;

    // Check all numbers from minA to maxB
    for (int num = minA; num <= maxB; num++) {
        final int finalNum = num; // Make num effectively final
        boolean isFactorOfA = a.stream().allMatch(x -> finalNum % x == 0);
        boolean isFactorOfB = b.stream().allMatch(y -> y % finalNum == 0);

        if (isFactorOfA && isFactorOfB) {
            count++;
        }
    }

    return count;
```