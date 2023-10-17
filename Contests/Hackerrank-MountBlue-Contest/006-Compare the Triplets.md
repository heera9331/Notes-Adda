# Compare the Triplets

## Solution

```java
    public static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        
        int alice=0;
        int bob=0;
        for(int i=0; i<a.size(); i++) {
            int ai = a.get(i);
            int bi = b.get(i);
            // case 1
            if(ai > bi) {
                alice++;
            }
            // case 2
            if (ai < bi) {
                bob++;
            }
            
            // case 3 - both have same number do nothing
        }
        
        List<Integer> res = new ArrayList<>();
        res.add(alice);
        res.add(bob);
        return res;
    }
```