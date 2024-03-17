# Memory Leak

A memory leak in C occurs when memory that has been allocated dynamically isn't deallocated properly, leading to a gradual depletion of available memory in the program. Here's a common scenario where a memory leak can occur:

```c
#include <stdlib.h>

int main() {
    // Allocating memory for an integer pointer
    int *ptr = (int*)malloc(sizeof(int));

    // Check if memory allocation was successful
    if (ptr == NULL) {
        return 1; // Exit with an error code
    }

    // Performing some operations with the allocated memory
    *ptr = 10;

    // Memory leak: Forgetting to deallocate the allocated memory
    // free(ptr); // This line should be added to deallocate memory

    return 0;
}

```


```c
#include <stdlib.h>

int main() {
    // Allocating memory for an integer pointer
    int *ptr = (int*)malloc(sizeof(int));

    // Check if memory allocation was successful
    if (ptr == NULL) {
        return 1; // Exit with an error code
    }

    // Performing some operations with the allocated memory
    *ptr = 10;

    // Freeing the allocated memory
    free(ptr);

    return 0;
}

```