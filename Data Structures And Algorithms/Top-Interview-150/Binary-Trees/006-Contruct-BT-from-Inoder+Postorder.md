# Construct Binary Tree from Inorder and Postorder Traversal

`Link`

https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150

`Description`

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 

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
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None

        root_val = postorder.pop()
        root = TreeNode(root_val)

        # Find the index of the root value in the inorder traversal
        root_index = inorder.index(root_val)

        # Recursively build the right subtree first
        root.right = self.buildTree(inorder[root_index + 1:], postorder)


        # Then build the left subtree
        root.left = self.buildTree(inorder[:root_index], postorder)

        return root

```