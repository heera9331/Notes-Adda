# Populating Next Right Pointers in Each Node II

`Link`

https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150

`Description`



`Testcases`



## Constraints



## Approach



## Complexity

`Time Complexity - O()`

`Space Complexity - O()`

## Solution

```java

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        if(root==null)
        return null;

        Queue<Node> q = new LinkedList<>();

        q.add(root);

        while(!q.isEmpty())
        {
            int size = q.size();
            for(int i=0;i<size;i++)
            {
                Node node = q.remove();

                if(i<size-1)
                node.next=q.peek();

                if(node.left!=null)
                q.add(node.left);

                if(node.right!=null)
                q.add(node.right);
            }
        }
        return root;
    }
}
```