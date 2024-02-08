# Majority Element

## Approach

## Complexity

`Time complexity - O(N)`

`Space complexity - O(N)`

## Solution

```java
class Solution {
    public int majorityElement(int[] nums) {
        int n=nums.length;
        HashMap<Integer, Integer> hm = new HashMap<>();
        int ans = -1;
        for (int el : nums) {
            if (hm.containsKey(el)) {
                hm.put(el, hm.get(el) + 1);
            } else {
                hm.put(el, 1);
            }
        }
    
        Set<Integer> keys = hm.keySet();

        for(Integer key : keys) {
            int storedFreq = hm.get(key);
            if (storedFreq > n/2) {
                ans=key;
            }
        }
        return ans;
    }
}


```
## Approach 1

## Complexity

`Time complexity - O(N)`

`Space complexity - O(N)`

## Solution

```java
class Solution {
    public int majorityElement(int[] nums) {
        int elm = nums[0];
        int n = nums.length;
        int cnt=0;
        for(int i=0; i<n; i++) {
            if (cnt == 0) {
                elm = nums[i];
            }
            cnt += (elm == nums[i]) ? 1 : -1;
        }

        return elm;
    }
}
```