# Super Reduced String


Sample Input 0

aaabccddd
Sample Output 0

abd
Explanation 0

Perform the following sequence of operations to get the final string:

aaabccddd → abccddd → abddd → abd
Sample Input 1

aa
Sample Output 1

Empty String
Explanation 1

aa → Empty String
Sample Input 2

baab
Sample Output 2

Empty String
Explanation 2

baab → bb → Empty String

```java
public static String superReducedString(String str) {
        StringBuilder sb = new StringBuilder(str);
        int i = 0;
        while (!sb.isEmpty() && i < sb.length()) {
            if (i+1 < sb.length() && sb.charAt(i) == sb.charAt(i+1)) {
                sb.deleteCharAt(i+1);
                sb.deleteCharAt(i);
                if (i > 0) {
                    i--;
                }
            }
            else {
                i++;
            }
        }
        if (sb.isEmpty()) {
            return "Empty String";
        }
        return sb.toString();
    }
```