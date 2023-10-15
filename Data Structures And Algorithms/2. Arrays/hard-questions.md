### 46. Permutations

Given an array `nums` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

```

**Example 2:**

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]

```

**Example 3:**

```
Input: nums = [1]
Output: [[1]]

```

**Constraints:**

- `1 <= nums.length <= 6`
- `10 <= nums[i] <= 10`
- All the integers of `nums` are **unique**.

```java
class Solution {
    List<List<Integer>> res;

    public List<List<Integer>> permute(int[] nums) {
        res = new ArrayList<>();

        backtrack(new LinkedHashSet<>(), nums);
        return res;
    }

    private void backtrack(LinkedHashSet<Integer> permutation, int[] nums) {
        if (permutation.size() == nums.length) {
            res.add(new ArrayList<>(permutation));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (permutation.contains(nums[i])) continue;

            permutation.add(nums[i]);
            backtrack(permutation, nums);
            permutation.remove(nums[i]);
        }
    }
}
```
