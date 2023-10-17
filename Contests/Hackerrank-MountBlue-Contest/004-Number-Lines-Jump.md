
```java
public static String kangaroo(int x1, int v1, int x2, int v2) {

    if (v1 == v2) 
        return "NO"; // They have the same rate, so they will never         meet.

    int t = (x2 - x1) / (v1 - v2);

    if (t >= 0 && (x1 + v1 * t) == (x2 + v2 * t)) 
        return "YES"; // They meet at the same location.

    return "NO"; // They don't meet at the same location.
}
```