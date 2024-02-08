# Maximum Depth of Binary Tree

`Link`



`Description`

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

`Testcase`



## Constraints

`The number of nodes in the tree is in the range [0, 104].`.
`-100 <= Node.val <= 100`

## Approach



## Complexity

`Time Complexity - O(N)` - n is the number of nodes in bt

`Space Complexity - O(log h)` -> height of bt because we are using recursion

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
    
    public int maxDepth(TreeNode root) {
        if(root==null) {
            return 0;
        }    

        int left=maxDepth(root.left);
        int right=maxDepth(root.right);
        
        return 1 + Math.max(left, right);
    }
}
```
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def fn(self, root):
        if root == None:
            return 0
        
        left = self.fn(root.left)
        right = self.fn(root.right)

        return max(left,right)+1

    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return self.fn(root)
```