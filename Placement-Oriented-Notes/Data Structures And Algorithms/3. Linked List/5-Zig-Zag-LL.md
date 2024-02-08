```java
class LinkedList {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data=data;
            this.next=null;
        }
    }

    Node head=null;

    void addFirst(int n) {
        Node newNode=new Node(n);
        if(head==null) {
            head=newNode;
        } else {
            newNode.next=head;
            head=newNode;
        }
    }

    void print() {
        if(head==null) {
            System.out.println("null");
        } else {
            Node t=head;
            while(t!=null) {
                System.out.print(t.data+"->");
                t=t.next;
            }
            System.out.println("null");
        }
    } 

    void zigzag() {
        // 1. find mid
        Node slow=head;
        Node fast=head;

        while(fast!=null && fast.next !=null) {
            slow=slow.next;
            fast=fast.next.next;
        }

        Node mid = slow;
        
        // 2. reverse 2 half
        Node curr=mid.next;
        mid.next=null; // break the link
        Node prev=null;
        Node next;
        while(curr != null) {
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        Node left=head;
        Node right=prev;
        Node nextLeft,nextRight;
        // alternate merge/zigzag merge
        while (left!=null && right!=null) {
            nextLeft=left.next;
            left.next=right;
            nextRight=right.next;
            right.next=nextLeft;

            left=nextLeft;
            right=nextRight;
        }

    }
}

public class Main {

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.addFirst(6);
        ll.addFirst(5);
        ll.addFirst(4);
        ll.addFirst(3);
        ll.addFirst(2);
        ll.addFirst(1);
        ll.print();
        ll.zigzag();
        ll.print();

    }
}

// output
// 1->2->3->4->5->6->null
// 1->6->2->5->3->4->null
```