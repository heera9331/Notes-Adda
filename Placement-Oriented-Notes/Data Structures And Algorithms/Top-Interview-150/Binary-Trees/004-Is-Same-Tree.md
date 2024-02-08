# Symmetric Tree

`Link`

https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

`Testcase`



## Constraints

`The number of nodes in the tree is in the range [1, 1000].`

`-100 <= Node.val <= 100`

## Approach



## Complexity

`Time Complexity - O(N)`

`Space Complexity - O(log h)`

## Solution

```java
class Solution {
    public boolean fn(TreeNode left, TreeNode right) {
        if(left==null || right==null)
        return left==right;
        if(left.val!=right.val)
            return false;
        return fn(left.left, right.right) && fn(left.right, right.left);
    }
    public boolean isSymmetric(TreeNode root) {
        return root == null || fn(root.left, root.right);
    }
}

```