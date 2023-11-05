# Construct Binary Tree from Preorder and Inorder Traversal


`Link`

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

`Testcases`



## Constraints

- `1 <= preorder.length <= 3000
inorder.length == preorder.length`


- `-3000 <= preorder[i], inorder[i] <= 3000`

- `preorder and inorder consist of unique values.`

- `Each value of inorder also appears in preorder.`
- `preorder is guaranteed to be the preorder traversal of the tree.`

- `inorder is guaranteed to be the inorder traversal of the tree.`

## Approach



## Complexity

`Time Complexity - O(N)`

`Space Complexity - O()`

## Solution

```python


class Solution:
    def buildTree(self, preorder, inorder):
        if inorder:
            INDEX = inorder.index(preorder.pop(0))
            root = TreeNode(inorder[INDEX])
            root.left = self.buildTree(preorder, inorder[:INDEX])
            root.right = self.buildTree(preorder, inorder[INDEX+1:])
			
            return root
```