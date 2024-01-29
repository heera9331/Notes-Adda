#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} node;


void display(node *head) {
    if(!head) {
        printf("NULL\n");
        return;
    }

    node *tmp = head;
    while(!tmp) {
        printf("%d -> ", tmp->data);
        tmp = tmp->next;
    }
    printf("NULL\n");
}


node *addFirst(node *head, int val) {
    node *newNode = (void*)malloc(sizeof(node));
    newNode->data = val;
    newNode->next = NULL;
    if(!head) {
        return head = newNode;
    }
    newNode->next = head;
    head = newNode;
    return head;
}

int main() {
    node *head = NULL;    
    display(head);
    head = addFirst(head, 1);
    head = addFirst(head, 2);
    display(head);

    return 0;
}