# Invert Binary Tree

`Link`

https://leetcode.com/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

Given the root of a binary tree, invert the tree, and return its root.

[./images/invert1-tree.jpg]

`Testcase`



## Constraints

`The number of nodes in the tree is in the range [0, 100].`

`-100 <= Node.val <= 100`

## Approach



## Complexity

`Time Complexity - O(N)`

`Space Complexity - O(log h)` -> hs is the height of binary tree

## Solution

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void fn(TreeNode root) {
        if(root==null) {
            return;
        }

        TreeNode left=invertTree(root.left);
        TreeNode right=invertTree(root.right);

        root.left=right;
        root.right=left;
    }

    public TreeNode invertTree(TreeNode root) {
        fn(root);
        return root;    
    }
}

```