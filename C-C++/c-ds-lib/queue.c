#include <stdio.h>
#include <stdlib.h>

typedef struct qnode {
    int data;
    struct qnode* next;
} qnode;

// Define a structure for the queue
typedef struct queue {
    qnode* front;
    qnode* rear;
} queue;

// Function to create a new queue node
qnode* getNewNode(int val) {
    qnode* newNode = (qnode*)malloc(sizeof(qnode));
    newNode->data = val;
    newNode->next = NULL;
    return newNode;
}

// Function to check if the queue is empty
int isempty(queue* q) {
    return q->front == NULL;
}

// Function to enqueue an element in the queue
void enqueue(queue* q, int val) {
    qnode* newNode = getNewNode(val);
    if (isempty(q)) {
        q->front = q->rear = newNode;
    }
    else {
        q->rear->next = newNode;
        q->rear = q->rear->next;
    }
}
int peek(queue *q) {
    if(q->front == NULL) {
        return -1;
    }

    return q->front->data;
}

int dequeue(queue *q) {
    if(isempty(q)) {
        return -1;
    }
    int val = q->front->data;
    qnode *tmp = q->front;
    q->front = q->front->next;
    free(tmp);
    return val;
}
