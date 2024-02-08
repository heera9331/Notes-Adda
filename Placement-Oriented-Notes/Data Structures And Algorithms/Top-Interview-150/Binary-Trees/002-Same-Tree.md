# Same Tree

`Link`

https://leetcode.com/problems/same-tree/submissions/857301943/?envType=study-plan-v2&envId=top-interview-150

`Description`



`Testcase`



## Constraints

`The number of nodes in both trees is in the range [0, 100].`

`-104 <= Node.val <= 104`

## Approach



## Complexity

`Time Complexity - O(n)`

`Space Complexity - O(log h)`

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
     

    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null) 
            return true;
        if(p == null || q == null ) 
            return false;
        return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}

```