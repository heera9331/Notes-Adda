**Q1. Remove nth node from end the list**

```java
void removeNthFromEnd(int n) {
    int size=length();
    if(size == n) {
        head=head.next;return;
    }

    Node t=head;
    int i=1;
    while(i != size-n) {
        t=t.next;
        i++;
    }
    t.next=t.next.next;
}
```

## 2. Reverse linked list

```java
static void reverse() {
    if(head == null) {
        return;
    }

    Node prev=null,curr=head,next;
    while(curr!=null) {
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next; 
    }
	    head=prev;
}
```

## 3. Check Palindrome

```java
static boolean checkPalindrome() {
    if(head == null || head.next == null) {
        return true;
    }
    Node leftHead=head;
    Node mid = getMid();

    Node prev=null,curr=mid,next;
    while (curr!=null) {
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }

    Node rightHead=prev;

    while (rightHead != null) {
        if(leftHead.data != rightHead.data) {
            return false;
        }
        leftHead=leftHead.next;
        rightHead=rightHead.next;
    }
    return true;
}
```

## 4. Odd Even linked list

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f1ec13e-bd35-4a6e-848c-8784483fae0c/Untitled.png)

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
```

```java
public ListNode oddEvenList(ListNode head) {
    if (head != null) {
    
        ListNode odd = head, even = head.next, evenHead = even; 
    
        while (even != null && even.next != null) {
            odd.next = odd.next.next; 
            even.next = even.next.next; 
            odd = odd.next;
            even = even.next;
        }

    }
    return head; 
}
```

## 5. Middle Node

```java
// [1,2,3,4] ==> mid is 3;

static Node getMid() {
    if(head == null) {
        return null;
    } else {
        Node slow=head,fast=head;
        while(fast!=null && fast.next!=null) {
            slow=slow.next; // +1
            fast=fast.next.next; // +2
        }

        return slow;
    }
}
```