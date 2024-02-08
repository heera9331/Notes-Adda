**Q1. Detect loop/cycle in a linked list.**

**Floyd’s cycle finding algorithm**

```java
boolean isCycle() {
    Node slow=head;
    Node fast=head;
    while(fast != null && fast.next != null) {
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast) {
            return true;
        }
    }
    return false;
}

// 1->2->3->1
/*
LinkedList ll = new LinkedList();
ll.addFront(2);
ll.addFront(1);

Node newNode = new Node(3);
ll.head.next.next=newNode;
newNode.next=ll.head;
// ll.display();
System.out.println(ll.isCycle());
*/

```

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head==null || head.next==null) {
            return false;
        }
        ListNode slow=head;
        ListNode fast=head.next;
        
        
        while(slow!=fast) {
            if (fast==null || fast.next==null) {
                return false;
            }
            slow=slow.next;
            fast=fast.next.next;
        }
        return true;
    }
}
```

```java
void removeCycle() {
    // detect cycle
    Node slow=head;
    Node fast=head;
    boolean cycle=false;
    while(fast!=null && fast.next!=null) {
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast) {
            cycle=true; 
            break;
        }
    }

    if(cycle == false) {
        return;
    }
    // find meeting point
    Node prev=null; // last node
    slow=head;
    while(slow!=fast) {
        prev=fast;
        slow=slow.next;
        fast=fast.next;
    }
    // remove cycle -> prev.next = null
    prev.next=null;
}

// driver code
/*
LinkedList ll = new LinkedList();
ll.head = new Node(1);
ll.head.next = new Node(2);
ll.head.next.next = new Node(3);
ll.head.next.next.next = new Node(4);
ll.head.next.next.next.next=ll.head.next;

System.out.println(ll.isCycle());
ll.removeCycle();
System.out.println(ll.isCycle());
*/

```

```java
// best way
public static void removeLoop(Node head){
        // code here
        // remove the loop without losing any nodes
        if (head==null || head.next==null) {
            return;
        }
        
        Node curr=head;
        Node prev=null;
        
        Set<Node> set = new HashSet<>();
        
        while(curr!=null) {
            if(set.contains(curr)){
                prev.next=null;
                return;
            }
            
            set.add(curr);
            
            prev=curr;
            curr=curr.next;
        }
    }
```