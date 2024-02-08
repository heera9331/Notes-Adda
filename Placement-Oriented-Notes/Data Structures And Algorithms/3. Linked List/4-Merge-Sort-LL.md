```java
// TC - O(nlog n)
// 
class Node {
    int data;
    Node next;

    Node() {}
    Node (int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head = null;

    void addFront(int n) {
        Node newNode = new Node(n);
        if(head == null) {
            head=newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }

    void display() {
        Node t=head;
        while(t!=null) {
            System.out.print(t.data + "->");
            t=t.next;
        }

        System.out.println("null");
    }

    Node getMid() {
        Node slow=head;
        Node fast=head.next;

        while(fast!=null && fast.next!=null) {
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow; // mid node
    }
    private Node merge(Node head1, Node head2) {
        // dummy node
        Node mergedLL = new Node(-1);
        Node tmp = mergedLL;

        while (head1 != null && head2 != null) {
            if(head1.data <= head2.data) {
                tmp.next=head1;
                head1=head1.next;
                tmp=tmp.next;
            } else {
                tmp.next=head2;
                head2=head2.next;
                tmp=tmp.next;
            }
        }

        while (head1 != null) {
            tmp.next=head1;
            head1=head1.next;
            tmp=tmp.next;
        }

        while (head2 != null) {
            tmp.next=head2;
            head2=head2.next;
            tmp=tmp.next;
        }
        return mergedLL.next;
    }
    Node mergeSort(Node head) {
        if(head==null || head.next==null) {
            return head;
        }
        // find mid
        Node mid = getMid();

        // left & right MS
        Node rightHead=mid.next;
        mid.next=null;
        Node newLeft = mergeSort(head);
        Node newRight = mergeSort(rightHead);

        // merge
        return merge(newLeft, newRight);
    }

}

public class Main {
    
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.addFront(1);
        ll.addFront(2);
        ll.addFront(3);
        ll.addFront(4);
        ll.display();
        ll.head = ll.mergeSort(ll.head);
        ll.display();
    }
}
```