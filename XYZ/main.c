// #include <stdio.h>
// #include <stdlib.h>

// typedef struct Node {
//     int data;
//     struct Node *next;
// } node;

// typedef struct Queue {
//     node *front;
//     node *rear;
// } queue;

// node *getNewNode(int val) {
//     node *newNode = malloc(sizeof(node));
//     newNode->data = val;
//     newNode->next = NULL;
//     return newNode;
// }

// int isempty(queue *q) {
//     return q->front == NULL;
// }

// void enqueue(queue *q, int val) {
//     node *newNode = getNewNode(val);
//     if(isempty(q)) {
//         q->front=q->rear = newNode;
//     }
//     else { 
//         q->rear->next = newNode;
//         q->rear = q->rear->next;
//     }
// }

// int peek(queue *q) {
//     if(q->front == NULL) {
//         return -1;
//     }

//     return q->front->data;
// }

// int dequeue(queue *q) {
//     if(isempty(q)) {
//         return -1;
//     }
//     int val = q->front->data;
//     node *tmp = q->front;
//     q->front = q->front->next;
//     free(tmp);
//     return val;
// }


#include <stdio.h>
#include "../C-C++/c-ds-lib/queue.c"

typedef struct VertexNode {
    int data;
    struct VertexNode *next;
} vNode;

vNode *getNewVertex(int val) {
    vNode *newVertexNode = malloc(sizeof(vNode));
    newVertexNode->data  = val;
    newVertexNode->next = NULL;
    return newVertexNode;
}

void bfs(vNode *graph[], int v) {
    int vis[v];
    for(int i=0; i<v; i++) {
        vis[i] = 0;
    }
    queue *q;
    enqueue(q, 0);
    vis[0] = 1;

    while(! isempty(q)) {
        int curr = dequeue(q);
        printf("%d\n", curr);

        // neighbours
        vNode *tmp = graph[curr];
        while(tmp!=NULL) {
            int v = tmp->data;
            if(vis[v] == 0) {
                vis[v] = 1;
                enqueue(q, v);
            }
            tmp=tmp->next;
        }
    }
}

int main() {
    vNode *graph[5];
    for(int i=0; i<5; i++) {
        graph[i] = NULL; 
    }
    graph[0] = getNewVertex(1);
    graph[0]->next = getNewVertex(4);

    graph[1] = getNewVertex(0);
    graph[1]->next = getNewVertex(2);

    graph[2] = getNewVertex(2);
    graph[2]->next = getNewVertex(4);

    graph[3] = getNewVertex(2);
    graph[3]->next = getNewVertex(4);
    
    graph[4] = getNewVertex(0);
    graph[4]->next = getNewVertex(2);
    graph[4]->next->next = getNewVertex(3);
    
    bfs(graph, 5);
    return 0;
}