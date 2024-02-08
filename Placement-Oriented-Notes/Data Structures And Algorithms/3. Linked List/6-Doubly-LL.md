A doubly linked list is a type of linked list that has one data field two address fields, the data field containing data, and the other two fields containing the address of the previous node and next node.

```java
class DoublyLL {
    class Node {
        int data;
        Node prev;
        Node next;

        Node(int n) {
            this.data=n;
            this.prev=null;
            this.next=null;
        }
    }

    Node head=null;
    Node tail=null;
    int size=0;

    // add other methods

    void addFirst(int n) {
        Node newNode = new Node(n);
        if(head==null) {
            tail=head=newNode;
        } else {
            newNode.next=head;
            head.prev=newNode;
            head=newNode;
        }
    }

    void print() {
        Node tmp=head;
        while(tmp!=null) {
            System.out.print(tmp.data+"<->");
            tmp=tmp.next;
        }
        System.out.println("null");
    }

    void reverse() {
        Node curr=head;
        Node prev=null;
        Node next;
        while(curr != null) {
            next=curr.next;
            curr.next=prev;
            curr.prev=next;
 
            prev=curr;
            curr=next;
        }

        head=prev;
    }
}

public class Main {
    public static void main(String[] args) {
        DoublyLL dll = new DoublyLL();
        dll.addFirst(3);
        dll.addFirst(2);
        dll.addFirst(1);
        dll.print();
        dll.reverse();
        dll.print();
    }
}
```